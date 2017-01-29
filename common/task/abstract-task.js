'use strict';

module.exports = class Task {

  constructor (_slug) {
    this._startMoment = new Date;
    this._slug = _slug;
    this.emmit();
  }

  get slug() {
    return this._slug;
  }

  set slug(_slug) {
    this._slug = _slug;
  }

}
