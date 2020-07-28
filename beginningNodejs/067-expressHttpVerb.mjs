/*
 * node js, module express, http verbs
 
 * $ curl localhost:3000 -i
 * $ curl localhost:3000 -i -X PUT
 */

import express from 'express';

const app = express();

app.all('/', (req, res, next) =>{
    res.write('all\n');
    next();
});

app.get('/', (req, res, next) =>{
    res.end('get\n');
});

app.put('/', (req, res, next)=>{
    res.end('put\n');
});

app.post('/', (req, res, next)=>{
    res.end('post\n');
});

app.delete('/', (req, res, next)=>{
    res.end('delete\n');
});

app.listen(3000);
