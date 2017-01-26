(function () {
  'use strict';

  const
    gulp     = require('gulp'),
    sequence = require('gulp-sequence'),
    util     = require('./common/util');

  gulp.task('default', (cb) => {
    return sequence([
      util.requireTask('lint')
    ], cb);
  });


  // gulp.task('prebuild', ['prebuild:cleanup','prebuild:bower']);
  // gulp.task('build', [
  //   'build:vendor',
  //   'build:application'
  // ]);
  // gulp.task('build:vendor', [
  //   'build:vendor:javascript',
  //   'build:vendor:stylesheet',
  //   'build:vendor:fonts'
  // ]);-
  // gulp.task('build:application', [
  //   'build:application:javascript',
  //   'build:application:stylesheet',
  //   'build:application:page',
  //   'build:application:image',
  //   'build:application:internacionalization',
  // ]);
  // gulp.task('lint', [
  //   'lint:javascript',
  //   'lint:stylesheet',
  //   'lint:page',
  // ]);
  // gulp.task('serve', [
  //   'serve:application'
  // ]);
  // gulp.task('watch', [
  //   'watch:vendor',
  //   'watch:application:javascript',
  //   'watch:application:stylesheet',
  //   'watch:application:page',
  //   'watch:application:image',
  //   'watch:application:internacionalization'
  // ]);


}());
