#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */

const nodemon = require('nodemon');
const path = require('path');
const args = require('./args');

const runner = path.resolve(__dirname, './runner');

args({
  default: () => require(runner),
  server: (argv) => {
    if (argv.watch) {
      nodemon({
        script: runner,
        args: process.argv.slice(2),
        ext: 'js,ts,yml',
        watch: 'src',
      });

      nodemon
        .on('quit', () => {
          process.exit();
        })
        .on('restart', (files) => {
          /* eslint-disable-next-line no-console */
          console.log('Server restarted, changes detected: ', files);
        });
    } else {
      require(runner);
    }
  },
});
