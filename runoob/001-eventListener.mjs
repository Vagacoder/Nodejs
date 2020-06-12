/*
 * Node.js event emitter
 */

import events from 'events';

const eventEmitter = new events.EventEmitter();

let l1 = ()=>{console.log('listener 1')};
let l2 = ()=>{console.log('listener 2')};

eventEmitter.addListener('connection', l1);
eventEmitter.on('connection', l2);

let connectionListeners = eventEmitter.listenerCount('connection');

console.log(`Event emitter has ${connectionListeners} listeners on connection`);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', l1);
console.log('l1 is removed');
connectionListeners = eventEmitter.listenerCount('connection');

console.log(`Event emitter has ${connectionListeners} listeners on connection`);

