import express from 'express';
import { checkFileExistsSync } from '../../util/fileutil';
import { processImage } from '../../util/imageutil';

const images = express.Router();
const path = require('path');

const assetDir = '../../../assets/full/';
const thumbDir = '../../../assets/thumb/';

images.get('/', async (req, resp) => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  const isValid =
    filename != null &&
    width != null &&
    height != null &&
    parseInt(width as string) > 0 &&
    parseInt(height as string) > 0;
  if (isValid) {
    //console.log(`Filename: ${filename}`);
    //console.log(`Width: ${width}`);
    //console.log(`Height: ${height}`);

    // Construct the file path from input
    //console.log(__dirname);
    const imagepath = assetDir + filename;
    const filepath = path.join(__dirname, imagepath + '.jpg');
    //console.log(__dirname);
    //console.log(filepath);

    const destFilePath = path.join(
      __dirname,
      thumbDir + filename + '_' + width + 'x' + height + '.jpg'
    );
    //console.log(destFilePath);

    const sourceFileExists: boolean = checkFileExistsSync(filepath);
    //console.log(sourceFileExists);

    if (sourceFileExists) {
      //console.log('Source file exists');

      if (checkFileExistsSync(destFilePath)) {
        //console.log('Thumbnail exists.  Serving up cached image');
        resp.sendFile(destFilePath);
      } else {
        //console.log('Thumbnail does NOT exist.  Generating thumbnail');
        await processImage(
          filepath,
          width as string,
          height as string,
          destFilePath
        )
          .then(() => {
            resp.sendFile(destFilePath);
          })
          .catch((err: Error) => {
            console.log('Inside await catch Error processing image. ' + err);
            resp.status(500);
            resp.send(
              '<p>Error processing image. Please try again.</p><p>' +
                err +
                '</p>'
            );
          });
      }
    } else {
      resp
        .status(404)
        .send('Source file does NOT exist.  Please check source file');
    }
  } else {
    resp.send(
      'Invalid query.  Please include required parameters: filename, width, height.  Width and height MUST BE integer > 0'
    );
  }
});

export default images;
