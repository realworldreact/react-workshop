var explorer = require('loopback-component-explorer');

module.exports = function(app) {
  explorer(app, { basePath: '/api', mountPath: '/explorer' });
};
