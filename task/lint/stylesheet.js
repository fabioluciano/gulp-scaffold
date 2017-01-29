module.exports = function(...args) {
  console.log(arguments);
  return () => {
    const
      whatToLint = config.processable.application.stylesheet;

    return gulp.src(whatToLint)
      .pipe(plugin.lesshint())
      .pipe(plugin.lesshint.reporter())
      .pipe(plugin.lesshint.failOnError());ava
  };
};
