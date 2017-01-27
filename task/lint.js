module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    plugin.sequence([
      requireTask('lint:javascript'),
      requireTask('lint:stylesheet')
    ]);
  };
};
