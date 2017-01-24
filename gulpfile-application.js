(function () {
  'use strict';
  // Bibliotecas iniciais a serem importadas
  var fs             = require('fs'),
    gulp             = require('gulp'),
    del              = require('del'),
    dependencies     = require('main-bower-files'),
    stylish          = require('jshint-stylish'),
    plugin           = require('gulp-load-plugins')({
      lazy: true,
      camelize: true
    }),
    directory        = require('./config/directory'),
    processable      = require('./config/processable'),
    compodoc         = require('./config/compodoc'),
    bowerFile        = require('../bower.json');

  gulp.task('watch:component:javascript', ['build'], () => {
    return gulp.watch(processable.javascript, buildApplicationJavascript)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:javascript\n');
        console.log(file);
      });
  });

  gulp.task('watch:component:stylesheet', ['build'], () => {
    return gulp.watch(processable.stylesheet, buildApplicationStylesheet)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:stylesheet\n');
      });
  });

  gulp.task('watch:component:page', ['build'], () => {
    return gulp.watch(processable.page, buildApplicationPage)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:page\n');
      });
  });

  gulp.task('watch:component:image', ['build'], () => {
    return gulp.watch(processable.image, buildApplicationImage)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:image\n');
      });
  });

  gulp.task('watch:component:internacionalization', ['build'], () => {
    return gulp.watch(processable.internacionalization, buildApplicationInternacionalization)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:internacionalization\n');
      });
  });
}());
