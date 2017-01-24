module.export = function(gulp, plugin, config) {
  var buildComponentJavascript = () => {
    var whatToBuild   = config.processable.javascript,
        whereToDeploy = directory.target.javascript;

    return gulp.src(whatToBuild)
      .pipe(plugin.concat('component.js'))
      .pipe(plugin.ngAnnotate({
        single_quotes : true
      }))
      .pipe(plugin.header(compodoc, { package : bowerFile }))
      .pipe(gulp.dest(directory.target.javascript));
  };

  return gulp
    .task('build:component:javascript', ['prebuild'], buildComponentJavascript);
};
