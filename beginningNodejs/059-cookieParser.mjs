/*
 * node js, module cookie-parser 
 */

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()
            .use(cookieParser())
            .use('/toggle', function(req, res){
                if(req.cookies.name){
                    console.log('find cookie name');
                    console.log('User name:', req.cookies.name);
                    console.log('cleaning cookie name ..');
                    res.clearCookie('name');
                    res.end('name cookie cleared! was: ' + req.cookies.name );
                }else{
                    res.cookie('name', 'foo');
                    res.end('Hello, name cookie set!');
                }

            })
            .listen(3000);

