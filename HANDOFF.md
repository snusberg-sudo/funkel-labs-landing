# Handoff: Funkel Labs site

Written 2026-11-04, from a Claude Code session to Codex.

## Where things stand

The site is built and verified. It is the bilingual landing page for Funkel Labs, a software studio: English at `/`, Japanese at `/ja/`, plus privacy pages. All work since `0279890 first commit` is still uncommitted. Commit only when the owner asks.

The latest pass rebuilt every section around one idea, **the print run**. Each section is one pass of a two-drum riso press, in blue and fluorescent pink inks. The visitor's own project idea comes off the press last, as the poster in Contact ("Print your idea").

| Read this | For |
|---|---|
| [README.md](README.md) | Running the site, env variables, content fields, picture credits |
| [DESIGN.md](DESIGN.md) | The design system and its named rules. The CSS follows it; keep the two in step |
| [PRODUCT.md](PRODUCT.md) | Audience, voice, what the page must get a visitor to do |
| [src/i18n/content.ts](src/i18n/content.ts) | All copy, English and Japanese side by side |

## How to verify

The check after any change is `npm run build` plus `npm run check`; both pass, with 0 errors, at handoff. Then look at the page in a browser at about 375, 768 and 1440px wide, with reduced motion both on and off. Earlier browser checks ran from throwaway scripts that are not in the repo.

## Hard rules from the owner

- Use real proof only: no invented metrics, testimonials, client logos or reviews.
- The pictures in `src/assets/found/` (and the press clip in `public/found/`) show the world of printing. Never present them as Funkel's own work, team or apps. Every picture used has an entry in `public/found/credits.json`, which renders on the picture credits page linked from the footer. When you add or remove a picture, update that file.
- The Japanese name is フンケル・ラボ, chosen to avoid FANCL (ファンケル). The Japanese copy is a draft awaiting a native speaker's review.
- Keep the light theme and the two inks. Purple only comes from the two layers printed over each other (`mix-blend-mode: multiply`); there is no black.

## Gotchas the code won't tell you

- **Japanese line breaks.** `content.ts` stores phrase-break marks as the literal six-character escape `​`. Some editors turn the escape into the invisible character itself; keep it written as the escape.
- **Tailwind is only tokens and a reset.** `global.css` loads Tailwind's theme and preflight layers, not its utilities. Style with scoped `<style>` blocks in each component, using the tokens in `@theme`.
- **Scroll-driven animations need longhand properties.** The minifier merges an `animation-timeline` into the `animation` shorthand and the browser then drops it. Write `animation-name`, `animation-timeline` and so on separately; the footer mast animation shows the pattern.
- **Duplicate text is drawn by CSS.** Misprinted ink copies of a headline come from a `data-text` attribute through `::before { content: attr(data-text) }`, so screen readers and checkers read each line once. DESIGN.md calls this the Draw-Once rule.
- **The Work rail needs `min-width: 0`.** Without it the flex rail grows to its content width and cards never get marked as out of view.
- **The hero star's blending.** `mix-blend-mode: multiply` sits on the star's `<figure>`, not the canvas; on the canvas it shows a white square. `src/scripts/spark-scene.ts` also handles losing the graphics context, pausing off screen and reduced motion; keep those paths when editing it.
- **Japanese fonts load only on Japanese pages.** They are imported in `src/pages/ja/*.astro`. `assetsInlineLimit` in `astro.config.mjs` keeps font files out of the CSS.
- **The contact form's spam trap.** The hidden Web3Forms `botcheck` field must stay `display: none`. Any other hiding method makes it widen the page.

## Open work

These need content from the owner. `grep -rn TODO src` finds each one:

- The real apps, screenshots and links (`work.apps`). Until they arrive, drawn plates stand in.
- The team names, roles and 4:5 portraits (`about.people`).
- The legal company name and registered address (`footer`).
- `PUBLIC_WEB3FORMS_KEY` and `PUBLIC_CONTACT_EMAIL`.

These are design calls the owner hasn't made yet. Change them only on request:

- The press video in Work prints blue on blue (ink-3 under pink-ink). The other found pictures print in both inks.
- The round ink-roller picture in the Contact email row uses `mix-blend-mode: luminosity`, unlike every other picture.
- `--color-ink-2` and `--color-rule` in `global.css` are unused, and DESIGN.md does not list them. They can be deleted.

## Untracked files

- `.claude/skills/`: three.js skills used by Claude Code.
- `.agents/` and `skills-lock.json`: an older copy of those skills.
- `.taste-skill/`, `.impeccable/`: design-tool state from Claude Code plugins. Only `DESIGN.md`, `PRODUCT.md` and `.impeccable/design.json` matter to the site.

Whether these are committed is the owner's call.
