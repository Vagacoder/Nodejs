/*
 * node js module optimist 
 */

import optimist from 'optimist';

const argv = optimist.argv;
console.log(argv);

// * optimist preserve first members of process.argv in '$0'
delete argv['$0'];
console.log(argv);
