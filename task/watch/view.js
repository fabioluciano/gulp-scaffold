module.export = function(gulp, plugin, config) {
  var watchView = () => {
    var whatToWatch = config.processable.view;

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:view\n');
      });
  };

  return gulp
    .task('watch:view', watchStylesheet);
};
