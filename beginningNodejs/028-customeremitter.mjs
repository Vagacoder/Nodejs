/*
 * node js, customer event emitter 
 */

import EventEmitter from 'events';
import util from 'util';

// * Foo inherit from EventEmitter, and add a new method: connect
function Foo(){
    EventEmitter.call(this);
}

util.inherits(Foo, EventEmitter);

Foo.prototype = Object.create(EventEmitter.prototype, {
    constructor:{
        value: Foo,
        enumerable: false,
        writable: true,
        configurable: true
    },
    connect: {
        value: function(){
            this.emit('connect');
        },
        enumerable: true,
        writable: true,
        configurable: true
    }
});

// ! if not add connect property above, use statements below
// Foo.prototype.connect = function(){
//     this.emit('connect');
// };

const fooEmitter = new Foo();
fooEmitter.on('connect', function(){
    console.log('connection established!');
})

console.log(fooEmitter);
fooEmitter.connect();
