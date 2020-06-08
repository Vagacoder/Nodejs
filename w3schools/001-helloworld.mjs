/*
 * to use import (from ES6), file extension should be .mjs instead of .js
 */

// const http = require('http');
// cont sdt = require('./lib/myDateModule');
import http from 'http';
import simpleDateTime from './lib/myDateModule.mjs';

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Hello World!\nTime at ${simpleDateTime()}\n`);
    res.end(`\nRequest: ${JSON.stringify(req.headers)}\n`);
}).listen(8080);

