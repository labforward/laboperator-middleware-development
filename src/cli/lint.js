/* eslint-disable no-console */
const { execSync } = require('child_process');

module.exports = async () => {
  execSync("yarn eslint --fix 'src/**/*.{ts,js}'", {
    stdio: 'inherit',
  });
};
