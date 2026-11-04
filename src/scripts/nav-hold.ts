/**
 * The hero stage is built around the nav (pinned below it), so the nav holds
 * until the hero's print run releases and the stage has risen into the nav's slot.
 * Past this scroll position it may step aside without leaving a bare band of paper.
 */
export function navHoldY(): number {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const release = hero ? hero.getBoundingClientRect().bottom + window.scrollY - window.innerHeight : 0;
  return Math.max(120, release + (nav?.offsetHeight ?? 0));
}
