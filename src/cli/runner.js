const args = require('./args');
const build = require('./build');
const clean = require('./clean');
const compile = require('./compile');
const init = require('./init');
const server = require('./server');
const test = require('./test');

args({ server, init, clean, compile, test, build });
