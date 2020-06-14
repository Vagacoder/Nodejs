/*
 * node js file system 
*/

import fs from 'fs';

console.log('1. asyn read file');
fs.readFile('data/input.txt', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(`1. Aysn read: ${data}`);
} )

console.log('\n2. sync read file');
let data = fs.readFileSync('data/input.txt');
console.log(`2. syn read: ${data}`);

console.log('\n3. open file');
fs.open('data/input.txt', 'r', (err, fid)=>{
    if(err){
        console.error(err);
    }else{
        console.log(`Open file fid: ${fid}`);
        fs.close(fid, ()=>{});
    }
});


console.log('\n4. file stats');
fs.stat('data/input.txt', (err, stats) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`File stats: `, stats);
        console.log(`File stats, is a file: ${stats.isFile()}`);
    }
})

console.log('\n5. open and read file');
let buf = new Buffer.alloc(1024);
fs.open('data/input.txt', 'r+', (err, fid)=>{
    if(err){
        console.error(err);
    }
    console.log('5. File is opened');
    fs.read(fid, buf, 0, buf.length, 0, (err, bytes)=>{
        if(err){
            console.error(err);
        }
        if(bytes > 0){
            console.log("5. file content: " + buf.slice(0, bytes).toString());
        }
    })
    fs.close(fid, (err)=> console.error(err));
    console.log('5. file is closed');
})

console.log('\n6. read directory');
fs.readdir('data/', (err, files)=>{
    if(err){
        console.error(err);
    }
    for(let file of files){
        console.log("6. read dir: ", file);
    }
})