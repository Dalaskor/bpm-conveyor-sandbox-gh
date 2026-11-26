const sum = require('../src/sum');
if (sum(2, 2) !== 4) { console.error('sum broken'); process.exit(1); }
console.log('ok');
