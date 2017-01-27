module.exports = (structure) => {
  return {
    application : {
      javascript : [
        structure.application.source.application.root + 'application.js',
        structure.application.source.application.configuration + '*.js',
        structure.application.source.application.modules + '*/*-module.js',
        structure.application.source.application.modules + '**/*-+(route|controller|component|filter|directive|service|factory|provider|decorator|value|constant).js'
      ],
      stylesheet : structure.source.asset.stylesheet + 'application.less',
      image : structure.source.asset.image + '*.+(png|gif|jpeg|jpg)',
      i18n : structure.application.source.application.modules + '*/i18n/*.js',
      view : structure.application.source.application.modules + '*/view/*.pug',
      template : structure.application.source.template + '*/*-module.js',
    },
    component : {
      javascript : [
        structure.application.source.application.root + 'application.js',
        structure.application.source.application.configuration + '*.js',
        structure.application.source.application.modules + '*/*-module.js',
        structure.application.source.application.modules + '**/*-+(route|controller|component|filter|directive|service|factory|provider|decorator|value|constant).js'
      ],
      stylesheet : structure.source.asset.stylesheet + 'application.less',
      image : structure.source.asset.image + '*.+(png|gif|jpeg|jpg)',
      i18n : structure.application.source.application.modules + '*/i18n/*.js',
      view : structure.application.source.application.modules + '*/view/*.pug',
      template : structure.application.source.template + '*/*-module.js',
    }
  };
};
