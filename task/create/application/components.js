module.export = function(gulp, plugin, config) {
  const
    componentsFile = __dirname + '/task/create/application/template/componentes.json',
    components = require(componentsFile);

  gulp.src(componentsFile)
    .pipe(plugin.prompt.prompt({
        type: 'checkbox',
        name: 'selectedComponents',
        message: 'Quais componentes devem ser importados para o projeto?',
        choices: Object.keys(components)
    }, (result) => {
      for(var component of result.selectedComponents) {
        console.log(component);
      }
    }));
};
