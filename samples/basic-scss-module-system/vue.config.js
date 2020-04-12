const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, './src/scss')]
        },
        prependData: `
        @use 'variables';
        `,
      }
    }
  }
};
