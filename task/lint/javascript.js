module.export = function(gulp, plugin, config) {
  var lintJavascript = () => {
    var whatToLint = config.processable.javascript;

    return gulp.src(whatToLint)
      .pipe(plugin.jshint())
      .pipe(plugin.jshint.reporter(stylish));
  };

  return gulp
    .task('lint:javascript', lintJavascript);
};
