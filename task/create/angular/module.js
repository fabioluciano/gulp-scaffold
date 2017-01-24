module.export = function(gulp, plugin, config) {
  var buildComponentStylesheet = () => {
    console.log('teste');
  };

  return gulp
    .task('create:module', createModule);
};
