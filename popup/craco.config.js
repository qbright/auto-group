const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve(
        __dirname,
        "../dist/popup/"
      );
      webpackConfig.output.publicPath = "/dist/popup/";
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.writeToDisk = true;
    return devServerConfig;
  },
};
