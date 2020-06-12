/*
 * error event 
 */

import events from 'events';

const emitter = new events.EventEmitter();

// ! without error listener, emitting 'error' cause exception and abort on program
// emitter.on('error', ()=>{console.log('catch error!')}); 

emitter.emit('error');
