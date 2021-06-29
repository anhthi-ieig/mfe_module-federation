const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../../package.json');

module.exports = () => new ModuleFederationPlugin({
  name: 'container',
  filename: 'remote-entry.less',
  exposes: {
    './styles/initial.less': './src/styles/initial.less',
  },
  shared: packageJson.dependencies,
});
