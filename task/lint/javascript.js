module.exports = function(gulp, plugin, config, requireTask) {

  return () => {
    const
      stylish = require('jshint-stylish'),
      whatToLint = config.processable.application.javascript;

    console.log(plugin.util.colors.blue('aaa'));
    gulp.task('lint:javascript', () => { gulp.src(whatToLint)
      .pipe(plugin.jshint())
      .pipe(plugin.jshint.reporter(stylish));
    });

  };
};
