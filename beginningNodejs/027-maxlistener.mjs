/*
 * node js, max number of listeners for event emitter 
 */

import EventEmitter from 'events';

const emitter = new EventEmitter();

let listenersCalled = 0;

function someCallBack(){
    emitter.on('foo', function(){
        listenersCalled++;
    });
}

// * you will see warning in console
for (let i =0; i < 20; i++){
    someCallBack();
}

emitter.emit('foo');
console.log('listeners called:', listenersCalled);
