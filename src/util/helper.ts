import { PathLike } from 'fs';
const fs = require('fs');

function checkFileExistsSync(filepath: PathLike) {
  const flag = fs.existsSync(filepath, fs.constants.F_OK);
  return flag;
}

export default checkFileExistsSync;
