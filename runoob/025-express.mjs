/*
 * using express framework 
*/

import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    console.log(`client GET request on ${req.url}`);
    res.send('Hello, world by GET');
})

app.post('/', (req, res) => {
    console.log(`client POST request on ${req.url}`);
    res.send('Holle, world by POST');
})

app.get('/del_user', (req, res) =>{
    console.log(`/del_user DELETE request`);
    res.send('Delete page');
})

app.get('/list_user', (req, res) =>{
    console.log(`/list_user GET request`);
    res.send('List users');
})

app.get('/ab*cd', (req, res) => {
    console.log(`/ab*cd GET request`);
    res.send('Regex');
})

const server = app.listen(8080, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`App visiting, address is http://${host} | ${port}`);
})