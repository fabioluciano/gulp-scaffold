module.export = function(gulp, plugin, config) {
  var buildComponentStylesheet = () => {
    var whatToBuild   = config.processable.stylesheet,
        whereToDeploy = directory.target.stylesheet;

    return gulp.src(whatToBuildt)
      .pipe(plugin.less())
      .pipe(gulp.dest(whereToDeploy));
  };

  return gulp
    .task('build:component:stylesheet', ['prebuild'], buildComponentStylesheet);
};
