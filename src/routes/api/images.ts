import express from 'express';

const images = express.Router();

images.get('/', (req, resp) => {
    resp.send('Images route');
});

export default images;