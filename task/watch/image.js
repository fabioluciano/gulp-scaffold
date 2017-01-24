module.export = function(gulp, plugin, config) {
  var watchImageOptimization = () => {
    var whatToWatch = config.processable.image;

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:image\n');
      });
  };

  return gulp
    .task('watch:image', watchImageOptimization);
};
