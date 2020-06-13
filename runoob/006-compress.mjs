/*
 * node js stream read and compress a file 
 */

import fs from 'fs';
import zlib from 'zlib';

fs.createReadStream('data/input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('data/input.txt.gz'));

console.log('File compression is done.');


