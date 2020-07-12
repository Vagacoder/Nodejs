/*
 * node js, stream 
 */

import stream from 'stream';
import EventEmitter from 'events';

console.log('Is stream a EventEmitter:', new stream.Stream() instanceof EventEmitter);
console.log('Is Writable a stream:', new stream.Writable() instanceof stream.Stream);
console.log('Is Readable a stream:', new stream.Readable() instanceof stream.Stream);
console.log('Is Duplex a stream:', new stream.Duplex() instanceof stream.Stream);
console.log('Is Transform a stream:', new stream.Transform() instanceof stream.Stream);

