var config = require('./config/structure.js');
var util = require('./common/util.js');

var structure = config.component;

util.createStructureObjectBased(structure);
// console.log(util);
