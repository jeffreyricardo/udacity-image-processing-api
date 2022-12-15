# udacity-image-processing-api

This project is a simple Image Processing API, for the Udacity Full Stack Javascript Developer nanodegree.  

This API allows a user to resize an existing image via URL parameters for width and height.  To ensure that the server doesn't perform unnecessary image processing, subsequent requests for an image for a particular size will be stored and served directly.

**Note**: _This API assumes images of type .jpg._

### Instructions for setup

Clone repository:
```
git clone https://github.com/jeffreyricardo/udacity-image-processing-api.git
```

Install dependencies:
```
npm install
```

Run:
```
npm run start
```

Test:
```
npm run test
```

Build:
```
npm run build
```

Other useful scripts:
```
npm run lint
npm run prettier
```

Source assets will be found in the following location:  
assets/full/

Generated and processed assets will be found in the following location:  
assets/thumb/



### Endpoints  
[http://localhost:3000/api/images?filename=frenchie&width=300&height=200](http://localhost:3000/api/images?filename=porsche&width=300&height=200)

This endpoint will process the original file frenchie.jpg, and will generate a new scaled image, of size 300x200.  

**Note**: _filename parameter expects the source filename without the .jpg extension_


Missing parameters, or invalid parameters will result in a message stating such.
