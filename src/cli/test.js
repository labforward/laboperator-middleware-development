const { execSync } = require('child_process');

module.exports = (argv) => {
  const { watch, ci } = argv;

  const command = `yarn jest ${watch ? '--watch' : ''} ${ci ? '--ci' : ''}`;

  console.info('\x1b[2m', command); // eslint-disable-line no-console

  execSync(command, { stdio: 'inherit' });
};
