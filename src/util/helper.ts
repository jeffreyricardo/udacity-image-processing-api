import { PathLike } from 'fs';
const fs = require('fs');
const sharp = require('sharp');

export function checkFileExistsSync(filepath: PathLike): boolean {
  const flag = fs.existsSync(filepath, fs.constants.F_OK);
  return flag;
}

export async function processImage(
  filepath: PathLike,
  width: string,
  height: string,
  destFilePath: PathLike
): Promise<void> {
  try {
    await sharp(filepath)
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(destFilePath);
  } catch (err) {
    console.log('processImage: Error processing image. ' + err);
    throw err;
  }
}
