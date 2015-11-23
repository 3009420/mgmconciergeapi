"use strict";
var gulp = require('gulp'),
    $ = require('gulp-load-plugins'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');


gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8888
        },
        ignore: ['./node_modules/**']
    })

    .on('restart', function () {
        console.log('Restarting Node Process....');
    })
});

gulp.task('test', function () {
    env({vars: {ENV:'Test'}});
    gulp.src('tests/*.js',{read: false})
        .pipe(mocha({reporter: 'nyan'}))
});