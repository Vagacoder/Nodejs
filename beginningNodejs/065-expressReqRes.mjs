/*
 * node js, module express. simplified request and response, and their methods. 

 * $ curl localhost:3000/?user=abc&pass=123
 */

import express from 'express';

const app = express()
            .use('/', (req, res, next)=>{
                // * request
                console.log('request type:', req.get('content-type'));
                console.log('request is a json?', req.is('json'));

                console.log('request query user:', req.query.user);
                console.log('request query pass:', req.query.pass);
                console.log('request path:', req.path);

                // * response
                res.set({
                    'content-length': '500'
                });
                res.type('.html');
                console.log('response type:', res.get('content-type'));
                res.send(200, '<html><body>Hello</body></html>');

            })
            .listen(3000);

