module.exports = (function () {
  'use strict';
  var source = (function () {
    var root = 'source/',
      assets = function () {
        return root + 'asset/';
      },
      javascript = function () {
        return root;
      },
      page = function () {
        return root;
      },
      stylesheet = function () {
        return assets() + 'stylesheet/';
      },
      image = function () {
        return assets() + 'image/';
      };
    return {
        root : root,
        assets : assets(),
        javascript : javascript(),
        stylesheet :  stylesheet(),
        page : page(),
        image : image()
    };
  }()),
  target = (function () {
    var root = 'target/',
      assets = function () {
        return root + 'asset/';
      },
      javascript = function () {
        return root;
      },
      stylesheet = function () {
        return root;
      },
      image = function () {
        return root + 'image/';
      };
      return {
        root :  root,
        assets :  assets(),
        javascript : javascript(),
        stylesheet : stylesheet(),
        image : image()
      };
  }());
  return {
    source : source,
    target : target
  };
}());
