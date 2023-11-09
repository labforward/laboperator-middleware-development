const { execSync } = require('child_process');

const clean = require('./clean');

module.exports = () => {
  clean();

  execSync(
    `tsc && babel src --extensions '.ts' --out-dir dist --copy-files && copyfiles -u 1 "src/**/*.d.ts" dist`,
    { stdio: 'inherit' },
  );
};
