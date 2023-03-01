const yargs = require('yargs');

const serverOption = (command) =>
  command
    .option('port', {
      alias: 'p',
      default: 8000,
      description: 'Which port to listen to.',
      type: 'number',
    })
    .option('watch', {
      alias: 'w',
      default: false,
      description: 'Watch for changes and automatically reload server.',
      type: 'boolean',
    });

const testOption = (command) =>
  command
    .option('ci', {
      default: false,
      description: 'Run in CI mode.',
      type: 'boolean',
    })
    .option('watch', {
      default: false,
      description: 'Run in watch mode.',
      type: 'boolean',
    });

const buildOption = (command) =>
  command.positional('tag', {
    describe: 'the image tag',
    type: 'string',
  });

const cli = yargs
  .command('server', 'Start the development server', serverOption)
  .command('init', 'Initialize a new middleware')
  .command('clean', 'Clean build output')
  .command('compile', 'Compile into javascript')
  .command('test', 'Run specs', testOption)
  .command(
    'build <tag>',
    'Package the middleware into docker image',
    buildOption
  )
  .alias('server', 's')
  .help()
  .alias('help', 'h');

module.exports = (handlers) => {
  const argv = cli.parse();
  const [command] = argv._;
  const handler = handlers[command] || handlers.default;

  if (handler) {
    handler(argv);
  } else {
    yargs.showHelp();
  }
};
