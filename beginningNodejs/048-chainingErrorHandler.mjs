/*
 * node js, module connect
 * middleware chaining 4. 
 * 4.1 Handle error
 * 4.2 pass error object to next()
 */

import connect from 'connect';

connect()
    .use((req, res, next)=>{
        next(new Error('Big bad error!'));
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

