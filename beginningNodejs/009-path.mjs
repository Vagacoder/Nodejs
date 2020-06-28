/*
 * node js, core module, path 
 */

import path from 'path';

console.log('path.normalize()');
console.log(path.normalize('../foo//bar'));

console.log('path.join()');
console.log(path.join('foo', '/bar', 'bas'));

console.log('path.dirname, path.basename, path.extname');
const pathname = '/foo/bar/baz.html';
console.log(path.dirname(pathname));
console.log(path.basename(pathname));
console.log(path.extname(pathname));
