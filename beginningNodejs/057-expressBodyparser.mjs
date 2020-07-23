/*
 * node js, module express, body-parser 
 */

import express from 'express';
import bodyParser from 'body-parser';

const app = express()
            .use(bodyParser())
            .use(function(req, res){
                if(req.body.foo){
                    res.end('Body parsed! Value of foo: ' + req.body.foo);
                }else{
                    res.end('Not find foo in body!');
                }
            })
            .use(function(err, req,res,next){
                res.end('Invalid body!');
            })
            .listen(3000);

            