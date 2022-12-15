import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, (): void => {
  console.log(`Server started at http://localhost:${port}`);
});

app.get('/', (req, resp) => {
  resp.send(
    `Please use endpoint at <b>http://${req.hostname}:3000/api/images</b>`
  );
});

export default app;
