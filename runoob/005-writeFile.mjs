/*
 * node js write a stream to a file 
 */

 import fs from 'fs';

 const str = `Time: ${new Date().toLocaleTimeString()}\n` + 
                `Date: ${new Date().toLocaleDateString()}\nWrite a log\n`;
 const writerStream = fs.createWriteStream('log/log.txt');
 writerStream.on('finish', () => {console.log('Log writing is done.')});
 writerStream.on('error', (err)=>{console.log(err.message);});
 writerStream.write(str, 'utf8');
 writerStream.end();
 console.log('Task is done!');