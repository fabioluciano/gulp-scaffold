module.export = function(gulp, plugin, config) {
  var buildComponentImage = () => {
    return gulp.src(processable.image)
      .pipe(plugin.image())
      .pipe(gulp.dest(directory.target.image));
  };

  return gulp
    .task('build:component:image', ['prebuild'], buildComponentImage);
};
