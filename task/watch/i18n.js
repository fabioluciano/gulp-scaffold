module.export = function(gulp, plugin, config) {
  var watchI18n = () => {
    var whatToWatch = config.processable.i18n;

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:i18n\n');
      });
  };

  return gulp
    .task('watch:image', watchI18n);
};
