import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const sourceDirectory = join(process.cwd(), 'image');
const convertedDirectory = join(process.cwd(), 'untitled folder');
const preparedDirectory = join(process.cwd(), 'untitled-folder-webp');
const targetDirectory = join(process.cwd(), 'public', 'image');
const supportedExtensions = new Set(['.webp', '.png', '.jpg', '.jpeg', '.avif']);

if (!existsSync(sourceDirectory)) {
  process.exit(0);
}

mkdirSync(targetDirectory, { recursive: true });

function normalizeCodeStem(fileName) {
  return fileName
    .replace(/(?:\.[^.]+)+$/u, '')
    .replace(/\s*-\s*/gu, '-')
    .replace(/\s+/gu, '')
    .toUpperCase();
}

function syncBaseImageDirectory() {
  for (const fileName of readdirSync(sourceDirectory)) {
    if (fileName.startsWith('.')) {
      continue;
    }

    const extension = extname(fileName).toLowerCase();

    if (!supportedExtensions.has(extension)) {
      continue;
    }

    const normalizedFileName = fileName.startsWith('LXA-')
      ? `${normalizeCodeStem(fileName)}${extension}`
      : fileName;

    copyFileSync(join(sourceDirectory, fileName), join(targetDirectory, normalizedFileName));
  }
}

async function syncConvertedOverrideDirectory() {
  if (!existsSync(convertedDirectory)) {
    return;
  }

  for (const fileName of readdirSync(convertedDirectory)) {
    if (fileName.startsWith('.')) {
      continue;
    }

    const extension = extname(fileName).toLowerCase();

    if (!supportedExtensions.has(extension) || !fileName.toUpperCase().startsWith('LXA-')) {
      continue;
    }

    const normalizedCode = normalizeCodeStem(fileName);
    const normalizedFileName = `${normalizedCode}.webp`;
    const sourcePath = join(convertedDirectory, fileName);
    const imageTargetPath = join(sourceDirectory, normalizedFileName);
    const publicTargetPath = join(targetDirectory, normalizedFileName);

    await sharp(sourcePath).webp({ quality: 86, effort: 6 }).toFile(imageTargetPath);
    copyFileSync(imageTargetPath, publicTargetPath);
  }
}

function syncPreparedOverrideDirectory() {
  if (!existsSync(preparedDirectory)) {
    return;
  }

  for (const fileName of readdirSync(preparedDirectory)) {
    if (fileName.startsWith('.')) {
      continue;
    }

    const extension = extname(fileName).toLowerCase();

    if (extension !== '.webp' || !fileName.toUpperCase().startsWith('LXA-')) {
      continue;
    }

    const normalizedFileName = `${normalizeCodeStem(fileName)}.webp`;
    const sourcePath = join(preparedDirectory, fileName);
    const imageTargetPath = join(sourceDirectory, normalizedFileName);
    const publicTargetPath = join(targetDirectory, normalizedFileName);

    copyFileSync(sourcePath, imageTargetPath);
    copyFileSync(sourcePath, publicTargetPath);
  }
}

syncBaseImageDirectory();

await syncConvertedOverrideDirectory();
syncPreparedOverrideDirectory();
