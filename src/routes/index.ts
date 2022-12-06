import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req, resp) => {
  resp.send('Main route...');
});

routes.use('/images', images);

export default routes;
