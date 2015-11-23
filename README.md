# mgmconciergeapi
This a rewrite of an older application that was originally written with (poorly architected) procedural PHP that was (and still is) used as a resource application for the concierge department at one the MGM Resorts International properties in Las Vegas. The first application was all hard coded, non dynamic, zero javascript and  with no database layer. 

This rewrite is using  
- Node.js and Express.js for the backend API
- Angular.js for the frontend single page application (this will be in a separate repo)
- MongoDB for the database layer using Mongolabs for DBAAS
- Mongoose for Object Document Managment for MongoDB
- Gulp.js for a build tool
  - Mocha for unit testing
  - Autoprefixer
  - Env
  - If
  - JSHint for linting Javascript
    - JSHint-Stylish for better linting error formatting
  - JSCS for styleguide enforcement
  - Nodemon for automatic server restarts after code changes
  - Yargs
