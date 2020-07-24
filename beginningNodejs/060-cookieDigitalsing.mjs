/*
 * node js, module express, cookie-parser using digital singed 

 * Digital signing:
 * 1. parse secret string to cookieParser()
 * 2. res.cookie(key, val, { signed: true })
 * 
 * Set http only:
 * { httpOnly: true }
 * 
 * Set cookie expiracy
 * { maxAge: nnn }
 * 
 */

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()
            .use(cookieParser('my super secrect sign key'))
            .use('/toggle', (req, res) =>{
                if(req.signedCookies.name){
                    res.clearCookie('name');
                    res.end('name cookie cleared! Was: ' + req.signedCookies.name);
                }else{
                    res.cookie('name', 'foo', {
                        signed: true,
                        maxAge: 3000,
                        httpOnly: true
                    });
                    res.end('name cookie set!');
                }
            }).listen(3000);
