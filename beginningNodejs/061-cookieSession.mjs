/*
 * node js, module express, cookie-session
 *
 *  
 */

import express from 'express';
import cookieSession from 'cookie-session';

const app = express()
            .use(cookieSession({
                keys: ['my super secret sign key']
            }))
            .use('/home', (req, res)=>{
                if(req.session.views){
                    req.session.views++;
                }else{
                    req.session.views = 1;
                }
                res.end('Total view for you: ' + req.session.views);
            })
            .use('/reset', function(req, res){
                delete req.session.views;
                res.end('Cleared all your views');
            })
            .listen(3000);