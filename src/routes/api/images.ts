import express from 'express';
import {promises as fs} from 'fs';

const images = express.Router();
const path = require('path');

images.get('/', (req, resp) => {

  let filename = req.query.filename;
  let width = req.query.width;
  let height = req.query.height;

  let isValid = filename != null && width != null && height != null;
  if (isValid) {
    console.log(`Filename: ${filename}`);
    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);

    // Construct the file path from input
    //console.log(__dirname);
    let imagepath = '../../../assets/full/' + filename;
    let filepath = path.join(__dirname, imagepath);
    console.log(filepath);

    resp.sendFile(filepath);

    // const readData = async () => {
    //   const myFile = await fs.access(filepath);
    //   resp.sendFile(filepath);
    // }
    // Query is valid, but need to check if image exists in local filesystem
  } else {
    resp.send('Invalid query.  Please include required parameters: filename, width, height')
  }
  

  //TODO: 
  /* Need to get the URL Parameters for size
   * and stylization if chosen.
   *
   * Also a library to serve properly scaled versions
   * of the images to the front end.  API will need
   * to handle resizing of serving stored images.
   * 
   * Logic:
   * If image exists, serve it.  If parameters are
   * provided, utilize the resizing middleware to do
   * so, and serve up the images.
   * 
   * Parameters: filename, width, height
   * 
   * Testing:
   * 1. Test Endpoint response
   * 2. Image transform function should resolve or reject
   */
});

export default images;
