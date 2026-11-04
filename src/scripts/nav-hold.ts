/**
 * The hero stage is built around the nav (pinned below it), so the nav holds
 * until the hero's print run releases. Past this scroll position it may step aside.
 */
export function navHoldY(): number {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const release = hero ? hero.getBoundingClientRect().bottom + window.scrollY - window.innerHeight : 0;
  return Math.max(120, release);
}
