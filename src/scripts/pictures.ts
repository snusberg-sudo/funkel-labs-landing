import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' });

/**
 * A picture kept in src/assets, named by its path inside that folder (e.g. /found/riso-drum.jpg),
 * so Astro can resize and re-encode it. A wrong path fails the build instead of shipping a broken image.
 */
export function picture(path: string): ImageMetadata {
  const file = files[`/src/assets${path}`];
  if (!file) throw new Error(`No picture at src/assets${path}`);
  return file;
}
