/*
 * node js, module express, express-session and connect-mongo
 *
 * Store session information in mongo database 
 */

import express from 'express';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';

// * passing exprees-session to connect-mongo
const MongoStore = connectMongo(expressSession);

// * instantiate connect-mongo
// ! parameter is updated!
const sessionStore = new MongoStore({
    url: 'mongodb://localhost',
    dbName: 'session',
});

// * express use express-session, pass the instance of connect-mongo to express-session.
const app = express()
            .use(expressSession({
                secret: 'Super secret sign key',
                store: sessionStore
            }))
            .use('/home', function(req, res){
                if(req.session.views){
                    req.session.views++;
                }else{
                    req.session.views = 1;
                }
                
                res.end('Total views for your: ' + req.session.views);
            })
            .use('/reset', function(req, res){
                delete req.session.views;
                res.end('Cleared all your views');
            })
            .listen(3000);
            