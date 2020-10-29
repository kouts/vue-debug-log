const devSettings = {
  lintOnSave: 'warning',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'DebugLog';
      args[0].meta = { description: 'A Vue component to facilitate debugging large data objects' };
      return args;
    });
  }
};

const buildSettings = {
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'debugLogPlugin'
    }
  }
};

const toExport = process.env.NODE_ENV === 'development' ? devSettings : buildSettings;

module.exports = toExport;
