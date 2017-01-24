module.export = function(gulp, plugin, config) {
  var watchBowerDependencies = () => {
    return gulp.watch('bower.json', ['vendor'])
      .on('change', (file) => {
        console.log('Idenficada mudança no arquivo de dependências! Executando vendor');
      });
  };

  return gulp
    .task('watch:vendor', watchBowerDependencies);
};
