module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    var whatToLint = config.processable.javascript;

    return gulp.src(whatToLint)
      .pipe(plugin.jshint())
      .pipe(plugin.jshint.reporter(stylish));
  };
};
