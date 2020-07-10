/*
 * node js,check inherutance chain (prototype chain) using instanceof operator
 */

import util from 'util';

function A(){};
function B(){};
util.inherits(B, A);
function C(){};

const b = new B();
console.log('Is b of A:', b instanceof A);
console.log('Is b of B:', b instanceof B);
console.log('Is b of C:', b instanceof C);
