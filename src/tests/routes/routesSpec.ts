import routes from '../../routes/index';
import supertest from 'supertest';
import app from '../../index';

app.use('/api', routes);

describe('Testing of API Endpoints', (): void => {
  it('Receive 200 response code when api is requested with NO parameters', async (): Promise<void> => {
    const message =
      'Invalid query.  Please include required parameters: filename, width, height.  Width and height MUST BE integer > 0';
    const response = await supertest(app).get('/api/images');
    expect(response.status).toBe(200);
    expect(response.text).toBe(message);
  });

  it('Receive 200 response code when api is requested with invalid parameters (invalid width/height)', async (): Promise<void> => {
    const message =
      'Invalid query.  Please include required parameters: filename, width, height.  Width and height MUST BE integer > 0';
    const response = await supertest(app).get(
      '/api/images?filename=frenchie&width=400&height=-400'
    );
    expect(response.status).toBe(200);
    expect(response.text).toBe(message);
  });

  it('Receive 404 response code when api is requested with invalid source file', async (): Promise<void> => {
    const message = 'Source file does NOT exist.  Please check source file';
    const response = await supertest(app).get(
      '/api/images?filename=nofile&width=400&height=400'
    );
    expect(response.status).toBe(404);
    expect(response.text).toBe(message);
  });
});
