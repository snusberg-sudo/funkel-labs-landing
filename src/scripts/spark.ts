/**
 * Decides whether the hero spark can run live, then loads three.js lazily.
 * The static SVG print stays in place for reduced motion, no WebGL,
 * data-saver and low-memory devices.
 */
export function mountSpark(host: HTMLElement): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return;
  if (!supportsWebGL()) return;

  const start = () => {
    import('./spark-scene')
      .then(({ createSparkScene }) => {
        const scene = createSparkScene(host);
        reduced.addEventListener('change', (event) => {
          if (event.matches) scene.dispose();
        });
      })
      .catch(() => {
        // The static print is already showing; nothing else to do.
      });
  };

  // Text first: the scene loads once the page is idle.
  const idle = () => ('requestIdleCallback' in window ? window.requestIdleCallback(start, { timeout: 2000 }) : setTimeout(start, 600));
  if (document.readyState === 'complete') idle();
  else window.addEventListener('load', idle, { once: true });
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    // three.js renders through WebGL 2 only.
    return Boolean(canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}
