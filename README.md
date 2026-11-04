# Funkel Labs website

Bilingual (English at `/`, Japanese at `/ja/`) landing page for Funkel Labs. Built with Astro, three.js and Tailwind's reset/theme layer; deploys to Vercel as a static site.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check
```

## Environment

Copy `.env.example` to `.env` (and set the same variables in Vercel):

| Variable | What it is |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com), created with the inbox that should receive contact messages. Without it the form shows its error message. |
| `PUBLIC_CONTACT_EMAIL` | The public address shown on the page and in the footer. |

## Content to fill in

All copy lives in [`src/i18n/content.ts`](src/i18n/content.ts), English and Japanese side by side. Search for `TODO`:

- **Apps** (`work.apps`): name, platform, one line, screenshot, store or live link. Put screenshots in `public/work/` and set `image` to `/work/<file>`; each card shows the top of a 16:10 crop. Until then a drawn two-ink plate stands in. Screenshots keep their full colour.
- **Team** (`about.people`): name, role, and a 4:5 portrait in `public/team/`. Portraits are printed in both drums automatically; until then a drawn star tile stands in.
- **Footer** (`footer`): legal company name and registered address.
- **Domain**: `site` in [`astro.config.mjs`](astro.config.mjs) (used for canonical and hreflang links).

Japanese headings and short lines break only at phrase boundaries marked with the escape for U+200B (a backslash, then u200B) in the copy; add one wherever a new line should be allowed to wrap.

## Pictures

The printing pictures and the press clip in [`public/found/`](public/found/) are openly licensed (CC BY) and credited in the footer from [`public/found/credits.json`](public/found/credits.json). They show the world of printing, never Funkel Labs' own work. Remove an entry there when its picture is no longer used.

## Design

The visual direction ("Two-Drum Riso": blue and fluorescent pink inks on bright stock) is recorded in [`PRODUCT.md`](PRODUCT.md) and `.impeccable/`. Tokens are in [`src/styles/global.css`](src/styles/global.css); every colour and font goes through them.
