/*
 * node js, multiple process, fork(), master 
 */

import fs from 'fs';
import child_process from 'child_process';

for(let i =0;i<3;i++){
    const worker_process = child_process.fork('034-processSpawnSupport.mjs', [i]);

    worker_process.on('close', (code)=>{
        console.log(`child process exits, code: `, code);
    })
}