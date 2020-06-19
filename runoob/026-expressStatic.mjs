/*
 * node js module, express, using static 
 */
import express from 'express';

const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) =>{
    res.send('Hello world');
})

const server = app.listen(8080, () =>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App visiting address: http://${host}:${port}`);
})