/*
 * node js, module express, serve-index 
 */

import express from 'express';
import serveIndex from 'serve-index';
import path from 'path';

const __dirname = path.resolve();

const app = express()
            .use(express.static(__dirname + '/public'))
            .use(serveIndex(__dirname + '/public'))
            .listen(3000);

