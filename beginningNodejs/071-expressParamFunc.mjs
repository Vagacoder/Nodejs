/*
 * node js, module express, express().param() 

 * $ curl localhost:3000/user/139 -i
 */

import express from 'express';

const app = express();

app.param('userId', function(req, res, next, userId){
    res.write('Looking up user: ' + userId + '\n');
    req.user = {'userId' : userId};

    next();
});

app.get('/user/:userId', function(req, res){
    res.end('User is: ' + JSON.stringify(req.user) + '\n');
});

app.listen(3000);
