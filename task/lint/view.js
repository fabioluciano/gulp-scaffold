module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    const
      whatToLint = config.processable.application.view;

    return gulp.src(whatToLint)
      .pipe(plugin.pugLinter())
      .pipe(plugin.pugLinter.reporter('fail'));
  };
};
