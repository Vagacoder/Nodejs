/*
 * node js, module connect, mounting 
 * and use closure to create a configurable middleware
 */

import connect from 'connect';

function echo(req, res, next){
    req.pipe(res);
}

function greeter(message){
    return function (req, res, next){
        res.end(message);
    }
};

const HiGreeter = greeter('Hi');
const HelloGreeter = greeter('Hello');


connect().use('/echo', echo).use('/hi', HiGreeter).use('/hello', HelloGreeter).listen(3000);
