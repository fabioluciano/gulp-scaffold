module.exports = (() => {
  const
    structure   = require('./structure'),
    task        = require('./task'),
    processable = require('./processable');

    console.log(processable(structure));

  return {
    structure : structure,
    task : task,
    processable : processable(structure)
  };
})();
