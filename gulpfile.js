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
    directory        = require('./gulp/directory'),
    processable      = require('./gulp/processable'),
    compodoc         = require('./gulp/compodoc'),
    bowerFile        = require('./bower.json');
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

  /*
   * Implementação das tarefas a serem executadas
   */
  gulp.task('prebuild:cleanup', () => {
    return del([
      directory.target.root
    ]);
  });

  var buildApplicationJavascript = () => {
    return gulp.src(processable.javascript)
      .pipe(plugin.concat('component.js'))
      .pipe(plugin.ngAnnotate({
        single_quotes : true
      }))
      .pipe(plugin.header(compodoc, { package : bowerFile }))
      .pipe(gulp.dest(directory.target.javascript));
  }
  gulp.task('build:component:javascript', ['prebuild'], buildApplicationJavascript);

  var buildApplicationStylesheet = () => {
    return gulp.src(processable.stylesheet)
      .pipe(plugin.less())
      .pipe(gulp.dest(directory.target.stylesheet));
  };
  gulp.task('build:component:stylesheet', ['prebuild'], buildApplicationStylesheet);

  var buildApplicationPage = () => {
    return gulp.src(processable.page)
      .pipe(plugin.pug())
      .pipe(plugin.angularTemplatecache({
        standalone: true,
        module : 'component.' + (bowerFile.name).replace('ngc-', '') + '.view',
        transformUrl : function(templateName) {
          return templateName.replace('view/', bowerFile.name + '/');
        }
      }))
      .pipe(plugin.debug())
      .pipe(gulp.dest(directory.target.root));
  };
  gulp.task('build:component:page', ['build:component:javascript'], buildApplicationPage);

  var buildApplicationImage = () => {
    return gulp.src(processable.image)
      .pipe(plugin.image())
      .pipe(gulp.dest(directory.target.image));
  };
  gulp.task('build:component:image', ['prebuild'], buildApplicationImage);

  var buildApplicationInternacionalization = () => {
    return gulp.src(processable.internacionalization)
      .pipe(jsonminify())
      .pipe(gulp.dest(directory.target.root + 'data'));
  };
  gulp.task('build:component:internacionalization', buildApplicationInternacionalization);

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
