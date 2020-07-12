/*
 * node js, customer writable stream 
 */

import stream from 'stream';
import util from 'util';
import fs from 'fs';

function Logger(){
    stream.Writable.call(this);
}

util.inherits(Logger, stream.Writable);

Logger.prototype._write = function(chunk){
    console.log(chunk.toString());
};

const logger = new Logger();

const readStream = fs.createReadStream('./data/log.txt');
readStream.pipe(logger);
