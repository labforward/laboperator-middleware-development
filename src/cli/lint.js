const { execSync } = require('child_process');

module.exports = async () => {
  try {
    execSync("yarn eslint --fix 'src/**/*.{ts,js}'", {
      stdio: 'inherit',
    });
  } catch (_) {
    process.exit(1);
  }
};
