/*
 * node js, run https and http on same host 
 */

import http from 'http';
import https from 'https';
import fs from 'fs';

const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
};

https.createServer(options, function(req, res){
    res.end('Secured connection!');
}).listen(443);

http.createServer(function(req, res){
    res.writeHead(301, {'Location':'http://' +req.headers['host'] + req.url});
    res.end();
}).listen(80);
