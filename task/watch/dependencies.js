module.export = function(gulp, plugin, config) {
  var watchBowerDependencies = () => {
    var whatToWatch = 'bower.json';

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('Idenficada mudança no arquivo de dependências! Executando vendor');
      });
  };

  return gulp
    .task('watch:vendor', watchBowerDependencies);
};
