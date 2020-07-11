/*
 * node js, process is also inheriting to EventEmitter
 * 2 events here: 1, exit; 2, uncaughtException
 */

import EventEmitter from 'events';

console.log(process instanceof EventEmitter);

process.on('exit', function(code){
    console.log('Exiting with code:', code);
})

process.on('uncaughtException', function(err){
    console.log('Caught exception:', err);
    console.log('Stack:', err.stack);
    process.exit(1);
});

a();
