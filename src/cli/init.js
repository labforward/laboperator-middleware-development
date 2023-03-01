/* eslint-disable no-console */
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

module.exports = async () => {
  try {
    console.log('Initializing middleware...');

    console.log('Copying boilerplate...');
    await fse.copy(path.resolve(__dirname, '../templates/init'), '.');

    console.log('Installing dependencies...');
    execSync(
      'yarn add --dev @types/node eslint labforward/laboperator-middleware-development prettier typescript',
      {
        stdio: 'inherit',
      }
    );

    console.log("Done! Don't forget to update config.yml!");
  } catch (error) {
    console.error(error);
  }
};
