const path = require('path');
const _ = require('lodash');
const { execSync } = require('child_process');

module.exports = (args) => {
  const [_command, ...childArgs] = args._;
  const mocharc = path.resolve(__dirname, '../../.mocharc.json');
  const reporterConfigFile = path.resolve(__dirname, '../../reporters.json');
  const ciArgs =
    args.ci || _.includes(childArgs, '--ci')
      ? `--no-interactive --reporter mocha-multi-reporters --reporter-options configFile=${reporterConfigFile}`
      : '';

  const command = `NODE_ENV=test yarn mocha --config=${mocharc} ${ciArgs} ${childArgs.join(
    ' '
  )} src/test_helper src/**/*.spec.{js,ts}`;

  console.info('\x1b[2m', command); // eslint-disable-line no-console

  execSync(command, { stdio: 'inherit' });
};
