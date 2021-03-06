module.export = function(gulp, plugin, config) {
  var buildComponentView = () => {
    var whatToBuild = config.processable.page;

    return gulp.src(processable.page)
      .pipe(plugin.pug())
      .pipe(plugin.angularTemplatecache({
        standalone: true,
        module : 'component.' + (bowerFile.name).replace('ngc-', '') + '.view',
        transformUrl : function(templateName) {
          return templateName.replace('view/', bowerFile.name + '/');
        }
      }))
      .pipe(plugin.debug())
      .pipe(gulp.dest(directory.target.root));
  };

  return gulp
    .task('build:component:view', ['build:component:javascript'], buildComponentView);
};
