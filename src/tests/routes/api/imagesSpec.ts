import supertest from 'supertest';
import app from '../../../index';

const fs = require('fs');
const path = require('path');

const thumbDir = '../../../../assets/thumb/';
const testFileName = 'frenchie_300x200.jpg';
const destFilePath = path.join(__dirname, thumbDir);

describe('Testing of image functionality for file generation', (): void => {
  // Get rid of any pre-existing test files first
  beforeAll(() => {
    console.log(
      'Preparing test environment.  Removing pre-existing generated thumbs'
    );
    try {
      fs.unlinkSync(destFilePath + testFileName);
    } catch (err) {
      console.log('Error removing test files - ' + err);
    }
  });

  it('Testing of image with proper parameters ', async (): Promise<void> => {
    // Hit the API with good params and generate a thumbnail
    const response = await supertest(app).get(
      '/api/images?filename=frenchie&width=300&height=200'
    );

    // Expect a file successful response
    expect(response.status).toBe(200);

    // Expect the file to be present in the thumb directory
    const files: string[] = fs.readdirSync(destFilePath);
    expect(files.includes(testFileName)).toBeTrue();
  });
});
