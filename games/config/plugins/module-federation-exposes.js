const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../../package.json');

module.exports = () => new ModuleFederationPlugin({
  name: 'games',
  filename: 'remote-entry.js',
  exposes: {
    './app': './src/bootstrap',
  },
  shared: packageJson.dependencies,
});
