/*
 * node js, multiple processs, exec(),  master 
*/

import fs from 'fs';
import child_process from 'child_process';
import { stderr } from 'process';

for(let i = 0; i < 3; i++){
    const workerProcess = child_process.exec('node 032-processExecSupport.mjs ' + i, (error, stdout,stderr)=>{
        if(error){
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', (code) => {
        console.log('child process exits, code: ', code);
    })
}