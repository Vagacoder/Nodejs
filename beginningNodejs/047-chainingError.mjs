/*
 * node js, module connect,
 * middleware chaining 3. call next() and pass argument to throw error.
 */

import connect from 'connect';

connect()
    .use(function(req, res, next){
        next('An error!');
    })
    .use(function(req,res, next){
        res.end('Never be called');
    })
    .listen(3000);
