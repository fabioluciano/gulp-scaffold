module.exports = (() => {
  var filesystem = require('fs');

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

  var requireTask = (slugTask) => {
    console.log(slugTask);
  }

  return {
    createStructureObjectBased : createStructure,
    requireTask : requireTask
  }
})();
