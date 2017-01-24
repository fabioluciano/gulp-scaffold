module.export = function(gulp, plugin, config) {
  var lintView = () => {
    var whatToLint = config.processable.view;

    return gulp.src(whatToLint)
      .pipe(plugin.pugLinter())
      .pipe(plugin.pugLinter.reporter('fail')).
  };

  return gulp
    .task('lint:view', lintView);
};
