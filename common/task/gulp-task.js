'use strict';

const
  util = require('gulp-util'),
  Task = require('./abstract-task');

module.exports = class GulpTask extends Task {

  constructor (...args) {
    super(args)
  }

  emmit() {
    console.log(util.colors.blue('aaa'));
  }
}
