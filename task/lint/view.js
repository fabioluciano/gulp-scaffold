module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    var whatToLint = config.processable.view;

    return gulp.src(whatToLint)
      .pipe(plugin.pugLinter())
      .pipe(plugin.pugLinter.reporter('fail')).
  };


};
