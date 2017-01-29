module.exports = (() => {
  const
    filesystem  = require('fs'),
    gulp        = require('gulp-runtime').create(),
    path        = require('path'),
    util        = require('gulp-util'),
    recursive   = require('recursive-readdir-synchronous'),
    plugin      = require('gulp-load-plugins')({
      lazy: true,
      camelize: true
    });

  const
    that = this,
    config = require('../configuration/configuration');

  var createStructure = (iterableObject) => {
    Object.keys(iterableObject).map((key, index) => {
      var
        value = iterableObject[key],
        createDirectory = (directory) => {
          if( ! filesystem.existsSync(directory)) {
            filesystem.mkdirSync(directory);
          }
        };

      return ((typeof value) === 'object') ? createStructure(value) : createDirectory(value);
    });
  };

  var avaliableTasks = () => {
    const
      fatherDirectory = path.dirname(__dirname) + '/task/',
      things = filesystem.readdirSync(fatherDirectory);

    var
      taskFiles = recursive(fatherDirectory, ['template']).sort(sortByType),
      avaliableTasks = {};

    for(var file of taskFiles) {
      const
        regex = /\/task\/((.*?)[\/.])+/g,
        slugged = file.match(regex)[0]
          .replace('/task/', '').replace('.', '').replace(/\//g, ':');

      avaliableTasks[slugged] = file;
    }

    return avaliableTasks;
  };

  var requireTask = (slugTask) => {
    const
      tasks = avaliableTasks();

    if(Object.keys(tasks).indexOf(slugTask) > 0) {
      return require(tasks[slugTask])(gulp, plugin, config, requireTask)();
    } else {
      console.log(util.colors.red.bold.inverse('A tarefa ' + slugTask + ' invocada não existe!'));
      return false;
    }
  };

  var sortByType = (first, second) => {
    const
      firstPath = first.split('/').length,
      secondPath = second.split('/').length;

    if (firstPath < secondPath) return -1;
    if (firstPath > secondPath) return 1;

    return first.localeCompare(second);
  };

  return {
    createStructure : createStructure,
    getAvaliableTasks : avaliableTasks,
    requireTask : requireTask
  }
})();
