
  'use strict';
  var javascript = function () {
    return [
      directory.source.javascript + 'component.js',
      directory.source.javascript + '**/*-+(controller|component|filter|directive|service|factory|provider|decorator|value|constant).js'
    ];
  }(),
  stylesheet = function () {
    return [
      directory.source.stylesheet + 'component.less'
    ];
  }(),
  page = function () {
    return [
      directory.source.page + '**/*.pug'
    ];
  }(),
  image = function () {
    return [
      directory.source.image + '**/*.+(png|gif|jpeg|jpg)'
    ];
  }(),
  internacionalization = function () {
    return [
      directory.source.javascript + 'i18n/*.json',
      directory.source.javascript + 'data/*.json'
    ];
  }();
  return {
    javascript           : javascript,
    stylesheet           : stylesheet,
    page                 : page,
    image                : image,
    internacionalization : internacionalization
  }
}());
