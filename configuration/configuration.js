module.exports = (() => {
  const
    structure   = require('./structure'),
    task        = require('./task'),
    processable = require('./processable');

  return {
    structure : structure,
    task : task,
    processable : processable(structure)
  };
})();
