#!/usr/bin/env node
require('yargs')
  .usage('$0')
  .command('*', 'generate a valid canadian sin', () => {}, function () {
    const sin = require('social-insurance-number').generate();
    require('clipboardy').writeSync(sin);
    console.log(sin);
  })
  .help()
  .argv
