import express, { response } from 'express';
import routes from '../../routes/index';
import supertest from 'supertest';

const app = express();
app.use('/api', routes);

describe('Testing of API Endpoints', () => {

  it('Receive 200 response code when api is requested with NO parameters', async () => {
    const message = 'Invalid query.  Please include required parameters: filename, width, height.  width, height MUST BE > 0';
    const response = await supertest(app).get('/api/images');
    expect(response.status).toBe(200);
    expect(response.text).toBe(message);
  });

  it('Receive 200 response code when api is requested with correct number of parameters', () => {
    return supertest(app).get('/api/images?filename=frenchie&width=400&height=400').expect(200);
  })

  it('Receive 200 response code when api is requested with invalid parameters (invalid width/height)', async () => {
    const message = 'Invalid query.  Please include required parameters: filename, width, height.  width, height MUST BE > 0';
    const response = await supertest(app).get('/api/images?filename=frenchie&width=400&height=-400');
    expect(response.status).toBe(200);
    expect(response.text).toBe(message);
  });

  it('Receive 200 response code when api is requested with bad source file', async () => {
    const message = 'Source file does NOT exist.  Please check source file';
    const response = await supertest(app).get('/api/images?filename=nofile&width=400&height=400');
    expect(response.status).toBe(404);
    expect(response.text).toBe(message);
  });


});
