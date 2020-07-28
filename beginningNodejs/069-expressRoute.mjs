/*
 * node js, module express, route 
 */

import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('nothing passed in!');
})

app.get(/^\/[0-9]+$/, (req, res)=>{
    res.send('number!');
});

app.get('/*', (req, res) => {
    res.send('not a number!');
});

app.listen(3000);
