"use strict";

//We load config
var config = global.config;

//We load gulp and all gulp plugins (gulp-||gulp.), lazy loading, look config.loadplugins
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(config.loadplugins);

gulp.task('bower', function() {
  return $.bower({ cmd: 'install'});
});

gulp.task('boweru', function () {
  return $.bower({ cmd: 'update'});
});
