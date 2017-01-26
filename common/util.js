module.exports = (() => {
  const filesystem = require('fs');
  const path = require('path');
  const util = require('gulp-util');
  const recursive = require('recursive-readdir-synchronous');

  var createStructure = (iterableObject) => {
    Object.keys(iterableObject).map((key, index) => {
      var value = iterableObject[key],
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
    const tasks = avaliableTasks();

    if(Object.keys(tasks).indexOf(slugTask) > 0) {
      return require(tasks[slugTask]);
    } else {
      console.log(util.colors.red.bold('A tarefa ' + slugTask + ' invocada não existe!'));
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
