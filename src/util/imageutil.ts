import { PathLike } from 'fs';
const sharp = require('sharp');

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
