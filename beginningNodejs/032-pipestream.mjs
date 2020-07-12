/*
 * node js, using pipe on streams 
 */

import fs from 'fs';
import zlib from 'zlib';

console.log('1. read a file and send to stdout');
const readableStream = fs.createReadStream('./data/log.txt');
readableStream.pipe(process.stdout);

console.log('\n2. read and gzip a file');
const gzip = zlib.createGzip();
const inStream = fs.createReadStream('./data/log.txt');
const outStream = fs.createWriteStream('./data/log.gz');

inStream.pipe(gzip).pipe(outStream);
