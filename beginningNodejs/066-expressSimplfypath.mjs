/*
 * node js, module express, simplify path for middleware 
 
 * $ curl localhost:3000/home
 */

import express from 'express';

const app = express()
            .use('/home', (req, res, next)=>{
                console.log('first:', req.url);
                next();
            })
            .use((req, res, next)=>{
                console.log('second', req.url);
                next();
            })
            .listen(3000);
            