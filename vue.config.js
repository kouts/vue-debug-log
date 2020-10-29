module.exports = {
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'debugLogPlugin'
    }
  }
};
