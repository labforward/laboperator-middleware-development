/* eslint-disable import/no-unresolved, import/no-dynamic-require */
const path = require('path');
const compile = require('./compile');

module.exports = (argv) => {
  let app, config;

  compile();

  try {
    app = require('laboperator-middleware').default;
    config = require('laboperator-middleware/config').default;
  } catch {
    app = require(path.resolve('./dist')).default;
    config = require(path.resolve('./dist/config')).default;
  }

  app.listen(argv.port, () => {
    config.logger.info(`Listening at PORT: ${argv.port}`);
  });
};
