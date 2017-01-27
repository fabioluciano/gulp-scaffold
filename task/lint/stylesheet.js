module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    const
      whatToLint = config.processable.application.stylesheet;

    return gulp.src(whatToLint)
      .pipe(plugin.lesshint())
      .pipe(plugin.lesshint.reporter())
      .pipe(plugin.lesshint.failOnError());
  };
};
