/*
 * node js stream 
 */

 import fs from 'fs';

 let data = '';

 const readerStream = fs.createReadStream('./data/input.txt');
 readerStream.setEncoding('utf8');

 readerStream.on('data', (chunk) => {
     data += chunk;
 })

 readerStream.on('end', ()=>{
     console.log(data);
 })

 readerStream.on('error', (err) => {
     console.log(err.stack);
 })

