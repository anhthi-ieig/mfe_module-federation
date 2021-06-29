const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/**
 * Plugins
 */

const moduleFederationExposes = require('./plugins/module-federation-exposes');
const moduleFederationRemotes = require('./plugins/module-federation-remotes');
const compressionResource = require('./plugins/compression-webpack-plugin');
const cleanPublicDir = require('./plugins/clean-webpack-plugin');

const minimizeJs = require('./plugins/terser-webpack-plugin');
const minimizeCss = require('./plugins/css-minimizer-webpack-plugin');

/**
 * Config
 */

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    moduleFederationExposes(),
    moduleFederationRemotes(process.env.PROD_DOMAIN),
    compressionResource(),
    cleanPublicDir(),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      minimizeJs(),
      minimizeCss(),
    ],
  },
});
