/*
 * node js for GET request 
 */

import http from 'http';
import url from 'url';
import util from 'util';

http.createServer((req, res) =>{
    res.writeHead(200, {'Content': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8080);
