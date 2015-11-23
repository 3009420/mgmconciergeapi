"use strict";
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha'),
    env = require('gulp-env'),
    //supertest = require('supertest'),
    config = require('./gulp.config')(),
    args = require('yargs');


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

gulp.task('vet', function () {
    log('Analyzing scripts with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jscs())

        .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
        .pipe($.jshint.reporter('fail'))
});



//////////////////////

function log (msg){
    if(typeof (msg)==='object'){
        for (var item in msg){
            if (msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else{
        $.util.log($.util.colors.blue(msg));
    }
}