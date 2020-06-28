/*
 * node js, core module, fs, file system, syn and async
 */

import fs from 'fs';

try{
    fs.unlinkSync('.data/test.txt');
    console.log('./data/test.txt is deleted successfully');
} catch(err){
    console.error(err);
}

fs.unlink('./data/test.txt', (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log('./data/test.txt is deleted successfully');
    }
})