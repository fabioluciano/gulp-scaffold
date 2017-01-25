module.exports = (() => {
  const filesystem = require('fs');
  const path = require('path');
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

  var avaliableTasks = (newFather) => {
    const fatherDirectory = newFather || path.dirname(__dirname) + '/task/';
    const things = filesystem.readdirSync(fatherDirectory);


    var taskFiles = recursive(fatherDirectory, ['template']);

    for(var file of taskFiles) {
      var regex = /\/task\/((.*?)[\/.])+/g;
      console.log(file.match(regex))
    }
    // for(thing of things) {
    //   const thingPath = fatherDirectory + thing,
    //     thingStat = filesystem.statSync(thingPath);
    //
    //   if(thingStat.isDirectory()) {
    //     // return avaliableTasks(thingPath + '/')
    //   } else {
    //     console.log(thingPath);
    //   }
    // };

    // console.log(globalThingPath);

  };

  var requireTask = (slugTask) => {
    const rearrangedSlug = slugTask.replace(/:/g, '/');
    const taskModule = path.dirname(__dirname) + '/task/' + rearrangedSlug;

    try {
      return require(taskModule);
    } catch(exception) {
      console.log(exception);
    }
  };

  return {
    createStructure : createStructure,
    avaliableTasks : avaliableTasks,
    requireTask : requireTask
  }
})();
