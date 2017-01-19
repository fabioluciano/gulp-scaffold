module.exports = (function () {
  'use strict';

  var config = (function() {
    var templateCache = function() {
      return {
        standalone: true,
        module : 'component.' + (bowerFile.name).replace('ngc-', '') + '.view',
        transformUrl : function(templateName) {
          return templateName.replace('view/', bowerFile.name + '/');
        }      
    }
  };

  return {
    config: config()
  }
}());
