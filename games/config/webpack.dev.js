const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/**
 * Plugins
 */

const moduleFederationExposes = require('./plugins/module-federation-exposes');
const moduleFederationRemotes = require('./plugins/module-federation-remotes');

/**
 * Config
 */

module.exports = merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    moduleFederationExposes(),
    moduleFederationRemotes('http://localhost:3000'),
  ],
});
