/*
 * 
 */

import http from 'http';
import events from 'events';

const eventEmitter = new events.EventEmitter();

const onScream = ()=>{
    console.log('Heard screaming');
}

eventEmitter.on('scream', onScream);

eventEmitter.emit('scream');
