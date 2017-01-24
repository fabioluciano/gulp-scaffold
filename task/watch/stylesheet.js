module.export = function(gulp, plugin, config) {
  var watchStylesheet = () => {
    var whatToWatch = config.processable.stylesheet;

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:stylesheet\n');
      });
  };

  return gulp
    .task('watch:stylesheet', watchStylesheet);
};
