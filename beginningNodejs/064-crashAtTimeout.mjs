/*
 * node js, module connect-timeout
 * 
 */

import express from 'express';
import timeout from 'connect-timeout';

const app = express()
            .use(timeout(2000))
            .use((req, res, next) =>{
                // * simulate database action taking 3s
                setTimeout(()=>{
                    next();
                }, 3000);
            })
            .use(haltOnTimedOut)
            .use((req, res, next)=> {
                res.set('content-type', 'text/plain');
                res.end('Done');
            })
            .listen(3000);


function haltOnTimedOut(req, res, next){
    console.log('req', req);
    if(!req.timedout){
        next();
    }
}