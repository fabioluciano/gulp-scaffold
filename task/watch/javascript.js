module.export = function(gulp, plugin, config) {
  var watchJavascript = () => {
    var whatToWatch = config.processable.javascript;

    return gulp.watch(whatToWatch)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:javascript\n');
        console.log(file);
      });
  };

  return gulp
    .task('watch:javascript', watchJavascript);
};
