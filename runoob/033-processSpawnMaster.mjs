/*
 * node js, multiple process, spawn(), master 
 */

import fs from 'fs';
import child_process from 'child_process';

for(let i =0; i< 3; i++){
    const workerProcess = child_process.spawn('node', ['034-processSpawnSupport.mjs', i]);

    workerProcess.stdout.on('data', (data)=>{
        console.log('stdout: '+ data);
    })

    workerProcess.stderr.on('data', (data)=>{
        console.error('stderr: ', data);
    })

    workerProcess.on('close', (code)=>{
        console.log('child process exits, code: ', code);
    })
}