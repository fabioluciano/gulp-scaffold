module.exports = (function () {
  'use strict';

  var banner = ['/**',
    ' * <%= package.name %> - <%= package.description %>',
    ' * @version v<%= package.version %>',
    ' */',
    ''].join('\n');

  return banner;
}());
