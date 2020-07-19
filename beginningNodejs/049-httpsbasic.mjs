/*
 * node js, module https, create a basic https server 
 */

import https from 'https';
import fs from 'fs';

const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
};

https.createServer(options, function(req, res){
    res.end('hello client!');
}).listen(3000);

