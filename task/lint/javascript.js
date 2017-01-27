module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    const
      stylish = require('jshint-stylish'),
      whatToLint = config.processable.application.javascript;

    return gulp.src(whatToLint)
      .pipe(plugin.jshint())
      .pipe(plugin.jshint.reporter(stylish));
  };
};
