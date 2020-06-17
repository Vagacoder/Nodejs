/*
 * node js path module 
 */

import path from 'path';

console.log(`normalization: ${path.normalize('/test/test1//2slashes/1')}`);
console.log(`joint path: ${path.join('/test', 'test1', '../test2')}`);
console.log(`resolve: ${path.resolve('main.js')}`);
console.log(`ext name: ${path.extname('019-path.mjs')}`);
