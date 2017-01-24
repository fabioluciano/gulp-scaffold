module.export = function(gulp, plugin, config) {
  var bumpVerion = () => {
    var whatToBump  = config.bumpable;

    return gulp.src(whatToBump)
      .pipe(gulp.dest(directory.target.javascript));
  };

  return gulp
    .task('release:bump', ['prebuild'], buildComponentJavascript);
};
