module.export = function(gulp, plugin, config) {
  var buildComponentImage = () => {
    var whatToBuild   = config.processable.image,
        whereToDeploy = directory.target.image;

    return gulp.src(whatToBuild)
      .pipe(plugin.image())
      .pipe(gulp.dest(whereToDeploy));
  };

  return gulp
    .task('build:component:image', ['prebuild'], buildComponentImage);
};
