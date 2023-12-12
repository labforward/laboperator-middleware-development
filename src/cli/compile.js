const { execSync } = require('child_process');

const clean = require('./clean');

module.exports = () => {
  clean();

  execSync(
    /*
     * yarn 2 and above stopped supporting binary hoisting
     *
     *   ref: https://github.com/yarnpkg/berry/issues/1518
     */
    `tsc && node_modules/@babel/cli/bin/babel.js src --extensions '.ts' --out-dir dist --copy-files && node_modules/copyfiles/copyfiles -u 1 "src/**/*.d.ts" dist`,
    { stdio: 'inherit' },
  );
};
