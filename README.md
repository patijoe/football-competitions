# football-competitions

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)

## Application Structure

All the application is organized with connected README.md files which explains each part. Here are the main application folders:

- [node_modules/](./node_modules): Project dependencies and development tools. 
- [public](./public):
    - [favicon.ico](./public/favicon.ico)
    - [index.html](./public/index.html): This is the HTML file
- [src](./src): The main `frontend-hub` application code.
  - [components](./src/components)
  - [constants](./src/constants): Constants use thought the application.
  - [service](./src/service): Utilities to call REST API's and manage the results. 
  - [styles](./src/styles): Assets of the application (fonts, images, CSS styles).
  - [serviceWorker.js](./serviceWorker.js): background worker that acts as a programmable proxy, allowing us to control what happens on a request-by-request basis.
- [.gitignore](./.gitignore): List of files and directories which should not be part of the
  repository.
- [package.json](./package.json): Standard package JSON which contains the project dependencies and
  the scripts being executed during development/deployment.
- [package-lock.json](./package-lock.json): is automatically generated for any operations where npm modifies either the 
node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are 
able to generate identical trees, regardless of intermediate dependency updates.
## First Steps

### Install Dependencies

This project is build using npm dependencies, to download, install and make available all the 
project dependencies for local development you need to:

> npm install

### Development Server

When you have all the dependencies install the next step is to launch the server, you can do this with the following commands:

> npm start

This will launch the development server in `localhost:3000`. 
