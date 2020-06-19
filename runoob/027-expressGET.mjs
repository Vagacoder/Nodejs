/*
 * node js module, expression, form, GET
 */

import express from 'express';

const app = express();

app.use('/public', express.static('public'));

app.get('/index1.html',  (req, res) =>{
    res.sendFile(__dirname + "/" + "index1.html");
});

app.get('/process_get', (req, res)=>{
    const response ={
        'fist_name' : req.query.fname,
        'last_name' : req.query.lname,
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App visiting address: http://${host}:${port}`);
})