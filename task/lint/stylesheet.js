module.export = function(gulp, plugin, config) {
  var lintStylesheet = () => {
    var whatToLint = config.processable.stylesheet;

    return gulp.src(whatToLint)
      .pipe(plugin.lesshint())
      .pipe(plugin.lesshint.reporter())
      .pipe(plugin.lesshint.failOnError());
  };

  return gulp
    .task('lint:stylesheet', lintStylesheet);
};
