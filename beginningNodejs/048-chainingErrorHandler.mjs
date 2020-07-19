/*
 * node js, module connect
 * middleware chaining 4. 
 * 4.1 Handle error
 * 4.2 pass error object to next()
 * 4.3 handler will catch all error, including throw error
 */

import connect from 'connect';

connect()
    .use((req, res, next)=>{
        throw new Error('First error!');
        next(new Error('Second error!'));
    })
    .use((req, res, next)=>{
        res.end('Never get called!');
    })
    .use((err, req, res, next)=>{
        console.log(err.message);
        console.log(err.stack);
        res.writeHead(500);
        res.end('Unable to process the request');
    })
    .listen(3000);

