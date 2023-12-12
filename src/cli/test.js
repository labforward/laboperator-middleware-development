const { execSync } = require('child_process');

module.exports = (argv) => {
  const {
    _: [_, ...options],
  } = argv;

  /*
   * yarn 2 and above stopped supporting binary hoisting
   *
   *   ref: https://github.com/yarnpkg/berry/issues/1518
   */
  const command = `./node_modules/jest/bin/jest.js ${options.join(' ')}`;

  console.info('\x1b[2m', command); // eslint-disable-line no-console

  execSync(command, { stdio: 'inherit' });
};
