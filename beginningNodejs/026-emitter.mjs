/*
 * node js, core module, Event emitter 
 */

import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('foo', function(a, b, c){
    console.log('Foo called with args:', a, b);
    c.handled = true;
});

emitter.on('foo', function(a, b, c){
    console.log('Foo called with revsersed args:', b, a);
    if(c.handled){
        console.log('c is handled!');
    }else{
        console.log('c need handler');
    }
});

const handler = function(){
    console.log('handler is called');
    emitter.removeListener('foo', handler);
}

emitter.on('foo', handler);

console.log(emitter.listeners('foo'));

emitter.emit('foo', {a: 123}, {b: 'hello'}, {handled: false});
emitter.emit('foo', {}, {}, {});

console.log(emitter.listeners('foo'));

emitter.removeListener('foo', emitter.listeners('foo')[1]);

console.log(emitter.listeners('foo'));
