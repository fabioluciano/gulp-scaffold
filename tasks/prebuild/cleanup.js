module.export = function() {
  var cleanUpTargetFolder = function () {
    return del([
      directory.target.root
    ]);
  };

  return gulp.task('prebuild:cleanup', cleanUpTargetFolder);
};
