const { execSync } = require('child_process');

module.exports = (argv) => {
  const { ci, watch } = argv;

  const command = `yarn jest ${watch ? '--watch' : ''} ${ci ? '--ci' : ''}`;

  console.info('\x1b[2m', command); // eslint-disable-line no-console

  execSync(command, { stdio: 'inherit' });
};
