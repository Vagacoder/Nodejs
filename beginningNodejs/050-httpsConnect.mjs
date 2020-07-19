/*
 * node js, module https and connect 
 */

import https from 'https';
import connect from 'connect';
import fs from 'fs';

const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
};

const app = connect();

https.createServer(options, app).listen(3000);
