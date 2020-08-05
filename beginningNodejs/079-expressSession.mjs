/*
 * node js, module express and express-session,
 * Compare this with 061-cookieSession, they are almost exactly same 
 * 
 * Pro: all session information in server memory.
 * Con: server reset wipes all information.
 */

import express from 'express';
import expressSession from 'express-session';

const app = express()
            .use(expressSession({
                secret: 'Super secret sign key'
            }))
            .use('/home', function(req, res){
                if(req.session.views){
                    req.session.views++;
                }else{
                    req.session.views = 1;
                }

                res.end('Total views for you: ' + req.session.views);
            })
            .use('/reset', function(req, res){
                delete req.session.views;
                res.end('Cleared all view counting.');
            })
            .listen(3000);
