module.exports = (() => {
  return {
    application : {
      source  : {
        root : 'source/',
        application : {
          root : 'source/application/',
          configuration : 'source/application/configuration/',
          modules : 'source/application/modules/',
          template : 'source/application/template/'
        },
        asset : {
          root : 'source/asset/',
          image : '/source/asset/image/',
          stylesheet : '/source/asset/stylesheet/'
        },
      },
      end2end : 'end2end/',
      dist    : 'test/',
    },
    component : {
      source  : 'source/',
      end2end : 'end2end/',
      dist    : 'test/',
    },
    angular : {
      module : {
        asset : {
          root : 'asset/',
          image : 'asset/image/',
          image : 'asset/stylesheet/'
        },
        component : 'component/',
        configuration : 'configuration/',
        controller : 'controller/',
        directive : 'directive/',
        filter : 'filter/',
        i18n : 'i18n/',
        providers : {
          root : 'providers/',
          constant : 'providers/constant',
          decorator : 'providers/decorator',
          factory : 'providers/factory',
          provider : 'providers/provider',
          service : 'providers/service',
          value : 'providers/value'
        },
        route : 'route/'
      }
    }
  };
})();
