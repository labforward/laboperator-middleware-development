const { execSync } = require('child_process');

module.exports = () => {
  execSync('rm -rf dist', { stdio: 'inherit' });
};
