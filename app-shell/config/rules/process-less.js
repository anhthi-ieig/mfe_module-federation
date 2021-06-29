const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = () => ({
  test: /\.less$/,
  include: path.resolve(__dirname, '../../src'),
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: '[local]_[hash:base64:6]',
        },
      },
    },
    {
      loader: 'less-loader',
    },
  ],
});
