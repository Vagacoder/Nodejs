/*
 * 
 */

import http from 'http';
import upperCase from 'upper-case';

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(upperCase.upperCase('Welcome to uPPer Case wOrLd.'));
    res.end();
    return;
}).listen(8080);
