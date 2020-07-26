/*
 * node js, module connect-timeout 

 * $ curl localhost:3000/api -i
 * wait 3 seconds
 */

import express from 'express';
import timeout from 'connect-timeout';

const app = express()
            .use('/api', timeout(5000),
            function(req, res, next){
                console.log('doing something, waiting for timeout');
                
            },
            function(error, req,res, next){
                if(req.timedout){
                    res.statusCode = 500;
                    res.end('Request timed out');
                    console.log('Request timed out!');
                }else{
                    next(error)
                }

            })
            .listen(3000);
            