var config = require('./config/structure.js');
var filesystem = require('fs');

var structure = config;

var createStructure = (iterableObject) => {
  Object.keys(iterableObject).map((key, index) => {
    var value = iterableObject[key],
      createDirectory = (directory) => {
        console.log(directory);
      };

    return ((typeof value) === 'object') ? createStructure(value) : createDirectory(value);
  });
}

createStructure(structure);
