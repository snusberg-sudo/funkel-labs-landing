import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { navHoldY } from './nav-hold';

gsap.registerPlugin(ScrollToPlugin);

/** Where a stop lands going down (nav stepped aside) and going up (nav back in view). */
type Stop = { down: number; up: number };

/** Advance one readable stop per wheel gesture, leaving touch and keys native. */
export function armSectionJumps(): void {
  const chapters = [...document.querySelectorAll<HTMLElement>('main > section, body > footer')];
  if (!chapters.length) return;

  const root = document.documentElement;
  const motion = window.matchMedia('(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)');
  let jump: ReturnType<typeof gsap.to> | undefined;
  let targetIndex = 0;
  let originIndex = 0;
  let heading = 0;
  // A gesture gets one jump; only a pause or reversal starts another gesture.
  let guarded = false;
  let wheelTotal = 0;
  let lastWheel = 0;
  let lastDirection = 0;
  let recent: number[] = [];

  const stops = (): Stop[] => {
    const viewport = window.innerHeight;
    const navHeight = document.querySelector<HTMLElement>('[data-nav]')?.offsetHeight ?? 0;
    const hold = navHoldY();
    const max = Math.max(0, root.scrollHeight - viewport);
    const clamp = (y: number) => Math.min(max, Math.max(0, Math.round(y)));
    const list: Stop[] = [{ down: 0, up: 0 }, { down: max, up: max }];

    for (const chapter of chapters) {
      const top = chapter.getBoundingClientRect().top + window.scrollY;
      // A chapter opens just below the nav when the nav is in view, and at the top edge once it has stepped aside.
      const under = clamp(top - navHeight);
      list.push({ down: under <= hold ? under : clamp(top), up: under });
      // A pinned stage's last stop is where it releases; any other tall chapter ends with its bottom on the fold.
      const stage = chapter.matches('[data-hero], [data-showcase]') ? chapter.firstElementChild as HTMLElement : null;
      const style = stage && getComputedStyle(stage);
      const end = clamp(style?.position === 'sticky'
        ? top + chapter.offsetHeight - stage!.offsetHeight - (parseFloat(style.top) || 0)
        : top + chapter.offsetHeight - viewport);
      const start = list[list.length - 1].down;
      if (end - start > viewport * 0.35) {
        const steps = Math.ceil((end - start) / (viewport * 0.85));
        for (let step = 1; step <= steps; step++) {
          const y = clamp(start + ((end - start) * step) / steps);
          list.push({ down: y, up: y });
        }
      }
    }

    const unique: Stop[] = [];
    for (const stop of list.sort((a, b) => a.up - b.up)) {
      const last = unique[unique.length - 1];
      if (!last || stop.up - last.up > 40) unique.push(stop);
    }
    return unique;
  };

  /** The stop the reader is on, or the next one in the given direction when between stops. */
  const locate = (list: Stop[], direction: number) => {
    const y = window.scrollY;
    const on = list.findIndex((stop) => Math.abs(stop.down - y) <= 20 || Math.abs(stop.up - y) <= 20);
    if (on >= 0) return { origin: on, next: on + direction };
    const next = direction > 0 ? list.findIndex((stop) => stop.down > y) : list.findLastIndex((stop) => stop.up < y);
    return { origin: next - direction, next };
  };

  // CSS smooth scrolling would fight each tweened frame, so it is off only while a jump runs.
  const settle = () => {
    jump = undefined;
    root.style.removeProperty('scroll-behavior');
  };

  const go = (list: Stop[], index: number, origin: number, direction: number) => {
    const stop = list[index];
    if (!stop) return;
    const destination = direction > 0 ? stop.down : stop.up;
    const distance = Math.abs(destination - window.scrollY);
    const tween = gsap.to(window, {
      scrollTo: { y: destination, autoKill: true },
      // Moves at once, then lands softly; longer runs take a little longer so every jump keeps one pace.
      duration: Math.min(1.1, 0.7 + (0.35 * distance) / window.innerHeight),
      ease: 'power4.out',
      overwrite: true,
      // Pinned stages redraw in the same frame the scroll moves; a scroll event would arrive a frame late.
      onUpdate: () => window.dispatchEvent(new Event('jumpframe')),
      onComplete: settle,
      onInterrupt: settle,
    });
    // Set after gsap.to, whose overwrite settles the jump it replaces.
    root.style.scrollBehavior = 'auto';
    jump = tween;
    targetIndex = index;
    originIndex = origin;
    heading = direction;
    guarded = true;
  };

  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [data-native-scroll]')) return;
    event.preventDefault();

    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
    const direction = Math.sign(delta);
    // Trackpads emit empty samples mid-gesture; they are not a reversal.
    if (!direction) return;
    const now = performance.now();
    const fresh = now - lastWheel > 180 || direction !== lastDirection;
    // Momentum can run straight into the next swipe, which shows as input leaping far above the fading tail.
    const size = Math.abs(delta);
    const push = size >= 10 && size > 3 * Math.max(...recent);
    recent = fresh ? [size] : [...recent.slice(-2), size];
    lastWheel = now;
    lastDirection = direction;
    if (fresh) wheelTotal = 0;
    if (guarded && !fresh && !push) return;
    guarded = false;
    wheelTotal += delta;
    if (Math.abs(wheelTotal) < 28) return;

    const list = stops();
    if (jump && direction === heading) {
      // Pushing on chains to the next stop once the current jump is landing.
      if (jump.progress() < 0.5) return;
      wheelTotal = 0;
      go(list, targetIndex + direction, targetIndex, direction);
    } else if (jump) {
      // Reversing turns back to the stop just left.
      wheelTotal = 0;
      go(list, originIndex, targetIndex, direction);
    } else {
      wheelTotal = 0;
      const { origin, next } = locate(list, direction);
      go(list, next, origin, direction);
    }
  };

  const onLink = (event: MouseEvent) => {
    if (event.target instanceof Element && event.target.closest('a[href]')) jump?.kill();
  };

  const sync = () => {
    if (motion.matches) {
      window.addEventListener('wheel', onWheel, { passive: false });
      document.addEventListener('click', onLink, true);
    } else {
      window.removeEventListener('wheel', onWheel);
      document.removeEventListener('click', onLink, true);
      jump?.kill();
      guarded = false;
      wheelTotal = 0;
    }
  };

  motion.addEventListener('change', sync);
  sync();
}
