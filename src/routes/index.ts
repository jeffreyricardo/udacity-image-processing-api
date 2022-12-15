import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req, resp) => {
  resp.send(
    `Please use endpoint at <b>http://${req.hostname}:3000/api/images</b>`
  );
});

routes.use('/images', images);

export default routes;
