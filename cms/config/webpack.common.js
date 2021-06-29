const path = require('path');

/**
 * Plugins
 */

const buildIndexHtml = require('./plugins/html-webpack-plugin');
const extractCss = require('./plugins/mini-css-extract-plugin');

/**
 * Module Rules
 */

const processJs = require('./rules/process-js');
const processLessInSrc = require('./rules/process-less');
const processLessInAntDesign = require('./rules/process-less-antd');

/**
 * Config
 */

module.exports = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      processJs(),
      processLessInSrc(),
      processLessInAntDesign(),
    ],
  },
  plugins: [
    buildIndexHtml(),
    extractCss(),
  ],
};
