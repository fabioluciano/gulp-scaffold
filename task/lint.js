module.exports = function(gulp, plugin, config, requireTask) {
  return () => {
    // console.log(config);

    plugin.sequence([
      requireTask('lint:javascript')
    ]);
  };
};
