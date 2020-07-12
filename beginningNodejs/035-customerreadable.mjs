/*
 * node js, customer readable stream
 * 
 */

import stream from 'stream';
import util from 'util';

function Counter(){
    stream.Readable.call(this);
    this._max = 100;
    this._index = 1;
}

util.inherits(Counter, stream.Readable);

Counter.prototype._read = function(){
    let i = this._index++;
    if(i > this._max){
        this.push(null);
    }else{
        let str = i + ', ';
        this.push(str);
    }
}

const counter = new Counter();
counter.pipe(process.stdout);
