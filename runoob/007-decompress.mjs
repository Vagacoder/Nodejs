/*
 * node js read cand decompress a ziped file 
 */

 import fs from 'fs';
 import zlib from 'zlib';

 fs.createReadStream('data/input.txt.gz')
 .pipe(zlib.createGunzip()).pipe(fs.createWriteStream('data/newInput.txt'));

 console.log("Decompression is done.");
