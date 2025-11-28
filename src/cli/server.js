/* eslint-disable import/no-dynamic-require */
const path = require('path');

const compile = require('./compile');

module.exports = (argv) => {
  let app, config;

  compile();

  try {
    app = require('middleware').default;
    config = require('middleware/config').default;
  } catch {
    app = require(path.resolve('./dist')).default;
    config = require(path.resolve('./dist/config')).default;
  }

  app.listen(argv.port, () => {
    config.logger.info(`Listening at PORT: ${argv.port}`);
  });
};
