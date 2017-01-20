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
  /*
   * Definição das tarefas que serão executadas
   */
  gulp.task('default', ['lint', 'build', 'watch']);
  gulp.task('prebuild', [
    'prebuild:cleanup'
  ]);
  gulp.task('build', [
    'build:component'
  ]);
  gulp.task('build:component', [
    'build:component:javascript',
    'build:component:stylesheet',
    'build:component:page',
    'build:component:image',
  ]);
  gulp.task('lint', [
    'lint:javascript',
    'lint:stylesheet',
    'lint:page',
  ]);
  gulp.task('watch', [
    'watch:component:javascript',
    'watch:component:stylesheet',
    'watch:component:page',
    'watch:component:image',
    'watch:component:internacionalization'
  ]);

  /**
   * Linters
   */

  // Lista os problemas de codestyle identificados.
  gulp.task('lint:javascript', () => {
    return gulp.src(processable.javascript)
      .pipe(plugin.jshint())
      .pipe(plugin.jshint.reporter(stylish));
  });

  gulp.task('lint:stylesheet', () => {
    return gulp.src(processable.stylesheet)
      .pipe(plugin.lesshint())
      .pipe(plugin.lesshint.reporter())
      .pipe(plugin.lesshint.failOnError());
  });

  gulp.task('lint:page', () => {
    return gulp.src(processable.page)
      .pipe(plugin.pugLinter())
      .pipe(plugin.pugLinter.reporter('fail'))
  });

  /**
   * Whatchers
   */
  gulp.task('watch:vendor', ['build'], () => {
    return gulp.watch('bower.json', ['vendor'])
      .on('change', (file) => {
        console.log('Idenficada mudança no arquivo de dependências! Executando vendor');
      });
  });

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
