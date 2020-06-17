/*
 * node js os module 
 */

import os from 'os';

console.log(`endiannes: ${os.endianness()}`);
console.log(`type: ${os.type()}`);
console.log(`platform: ${os.platform()}`);
console.log(`total memory: ${os.totalmem()}`);
console.log(`free memory: ${os.freemem()}`);