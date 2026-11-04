/**
 * Section entrances. Each chapter's parts (marked data-rise) rise in turn the
 * first time the chapter comes into view. The hiding is armed here, by adding
 * .motion to <html>, so without this script every part is simply visible.
 */
export function armEntrances(): void {
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!motion.matches || !('IntersectionObserver' in window)) return;

  const chapters = document.querySelectorAll<HTMLElement>('[data-chapter]');
  document.documentElement.classList.add('motion');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  for (const chapter of chapters) observer.observe(chapter);
}
