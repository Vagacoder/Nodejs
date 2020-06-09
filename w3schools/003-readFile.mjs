/*
 * node js file system module 
 */

import http from 'http';
import fs from 'fs';
import simpleDateTime from './lib/myDateModule.mjs';

http.createServer((req, res) => {
    fs.readFile('./public/index1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    fs.appendFile('./log/log.txt',
        `url: ${req.url}\ntime: ${simpleDateTime().toLocaleTimeString()}\n`,
        (err) => {
            if (err) { throw err; }
            console.log('log saved!');
        }
    );
}).listen(8080);
