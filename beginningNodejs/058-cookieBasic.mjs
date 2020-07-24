/*
 * node js, module express, cookie
 */

import express from 'express';

const app = express()
            .use(function(req, res){
                console.log('---client request cookies header:\n', req.headers['cookie']);
                res.cookie('name', 'foo');
                res.end('Hello with cookie!');
            })
            .listen(3000);
        
