module.export = function(gulp, plugin, config) {
  var buildComponentJavascript = () => {
    return gulp.src(processable.javascript)
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
