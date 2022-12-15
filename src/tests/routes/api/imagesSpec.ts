import supertest from 'supertest';
import app from '../../../index';

const fs = require('fs');
const path = require('path');

const thumbDir = '../../../../assets/thumb/';
const testFileName = 'frenchie_300x200.jpg';
const destFilePath = path.join(__dirname, thumbDir);

describe('Testing of image functionality for file generation', () => {
  it('Testing of image with proper parameters ', async () => {
    const response = await supertest(app).get(
      '/api/images?filename=frenchie&width=300&height=200'
    );
    const files: string[] = fs.readdirSync(destFilePath);
    expect(response.status).toBe(200);
    expect(files.includes(testFileName)).toBeTrue();
  });
});
