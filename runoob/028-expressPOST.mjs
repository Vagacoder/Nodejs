/*
 * node js module, express, form, POST 
 */

import express from 'express';
import bodyParser  from 'body-parser';

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/public', express.static('public'));

app.get('/index2.html', (req, res)=>{
    res.sendFile( __dirname + "/" + "index2.html");
})

app.post('/process_post', urlencodedParser, (req, res) =>{
    const response = {
        'first_name': req.body.fname,
        'last_name' : req.body.lname,
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

const server = app.listen(8080, ()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App visiting address: http://${host}:${port}`);
})