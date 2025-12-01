const args = require('./args');
const build = require('./build');
const clean = require('./clean');
const compile = require('./compile');
const init = require('./init');
const lint = require('./lint');
const server = require('./server');
const test = require('./test');

args({ build, clean, compile, init, lint, server, test });
