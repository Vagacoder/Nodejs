/*
 * node .js file (not .mjs file) loading module 'file' using require(), first 
 * look for file.js, if not found, look for file.json
 */

const set = require('./lib/set');

console.log(set.foo);