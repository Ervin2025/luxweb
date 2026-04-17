import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC_IMAGE_DIRECTORY = join(process.cwd(), 'public', 'image');

const AVAILABLE_CODED_IMAGE_REPLACEMENTS = new Set(
  existsSync(PUBLIC_IMAGE_DIRECTORY)
    ? readdirSync(PUBLIC_IMAGE_DIRECTORY)
        .filter(fileName => fileName.startsWith('LXA-') && fileName.endsWith('.webp'))
        .map(fileName => fileName.replace(/\.webp$/u, ''))
    : []
);

export function getReplacementImageSrc(code: string, fallbackSrc: string) {
  if (AVAILABLE_CODED_IMAGE_REPLACEMENTS.has(code)) {
    return `/image/${code}.webp`;
  }

  return fallbackSrc;
}
