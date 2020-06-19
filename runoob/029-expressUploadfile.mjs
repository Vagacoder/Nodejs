/*
 * node js module, express, upload file 
 */

import express from 'express';
import fs from 'fs';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/index3.html', (req, res) => {
    res.sendFile( __dirname + '/' + 'index3.html');
});

app.post('/file_upload', (req, res) =>{
    console.log(req.files[0]);

    // const des_file = __dirname +'/' + req.files[0].originalname;
    // fs.readFile()
})

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App visiting address: http://${host}:${port}`);
})
