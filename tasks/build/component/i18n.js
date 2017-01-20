module.export = function(gulp, plugin, config) {
  var buildComponentI18n = () => {
    return gulp.src(processable.internacionalization)
      .pipe(jsonminify())
      .pipe(gulp.dest(directory.target.root + 'data'));
  };

  return gulp
    .task('build:component:i18n', buildComponentI18n);
};
