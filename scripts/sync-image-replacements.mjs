import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const sourceDirectory = join(process.cwd(), 'image');
const targetDirectory = join(process.cwd(), 'public', 'image');
const supportedExtensions = new Set(['.webp', '.png', '.jpg', '.jpeg', '.avif']);

if (!existsSync(sourceDirectory)) {
  process.exit(0);
}

mkdirSync(targetDirectory, { recursive: true });

for (const fileName of readdirSync(sourceDirectory)) {
  if (fileName.startsWith('.')) {
    continue;
  }

  const extension = extname(fileName).toLowerCase();

  if (!supportedExtensions.has(extension)) {
    continue;
  }

  const normalizedFileName = fileName.startsWith('LXA-')
    ? `${basename(fileName, extension).replace(/\s*-\s*/gu, '-').toUpperCase()}${extension}`
    : fileName;

  copyFileSync(join(sourceDirectory, fileName), join(targetDirectory, normalizedFileName));
}
