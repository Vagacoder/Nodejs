/*
 * node js, module express, parameter-based routing 

 * $ curl localhost:3000/user/139
 */

import express from 'express';

const app = express();

app.get('/user/:userId', function(req, res){
    res.send('userId is: ' + req.params['userId'] + '\n');
});

app.listen(3000);
