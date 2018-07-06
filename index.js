#!/usr/bin/env node

const chalk = require('chalk');

require('yargs')
  .usage('$0')
  .command('*', 'generate a valid canadian sin', () => {}, function () {
    const sin = require('social-insurance-number').generate();
    require('clipboardy').writeSync(sin);
    console.log(sin, chalk.dim('(Copied to Clipboard)'));
  })
  .help()
  .argv