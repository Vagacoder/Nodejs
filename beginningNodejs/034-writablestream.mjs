/*
 * node js, writable stream 
 */

import fs from 'fs';

const writestream = fs.createWriteStream('./data/message.txt');

writestream.write('A message from foo to bar\n');
writestream.end('Done\n');
