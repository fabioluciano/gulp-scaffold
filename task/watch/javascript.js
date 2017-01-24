module.export = function(gulp, plugin, config) {
  var whatToWatch = config.processable.javascript;

  var watchJavascript = () => {
    return gulp.watch(whatToWatch, buildApplicationJavascript)
      .on('change', (file) => {
        console.log('O arquivo ' + file + ' foi modificado! Executando build:component:javascript\n');
        console.log(file);
      });
  };

  return gulp
    .task('watch:javascript', watchJavascript);
};
