import { PathLike } from 'fs';
const fs = require('fs');

export function checkFileExistsSync(filepath: PathLike): boolean {
  const flag = fs.existsSync(filepath, fs.constants.F_OK);
  return flag;
}