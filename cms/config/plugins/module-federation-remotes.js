const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (domainUrl) => new ModuleFederationPlugin({
  remotes: {
    container: `container@${domainUrl}/remote-entry.less`,
  },
});
