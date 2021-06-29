const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = () => new ModuleFederationPlugin({
  remotes: {
    cms: 'cms@http://localhost:3001/remote-entry.js',
    games: 'games@http://localhost:3002/remote-entry.js',
  },
});
