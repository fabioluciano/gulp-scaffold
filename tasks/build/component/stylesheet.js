module.export = function(gulp, plugin, config) {
  var buildComponentStylesheet = () => {
    return gulp.src(processable.stylesheet)
      .pipe(plugin.less())
      .pipe(gulp.dest(directory.target.stylesheet));
  };

  return gulp
    .task('build:component:stylesheet', ['prebuild'], buildComponentStylesheet);
};
