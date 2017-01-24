module.export = function(gulp, plugin, config) {
  var buildComponentI18n = () => {
    var whatToBuild   = config.processable.internacionalization,
        whereToDeploy = directory.target.i18n;

    return gulp.src(whatToBuild)
      .pipe(jsonminify())
      .pipe(gulp.dest(whereToDeploy));
  };

  return gulp
    .task('build:component:i18n', buildComponentI18n);
};
