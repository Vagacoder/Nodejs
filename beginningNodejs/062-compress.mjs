/*
 * node js, module express and compression 
 */

import express from 'express';
import compression from 'compression';
import path from 'path';

const __dirname = path.resolve();

const app = express()
            .use(compression())
            .use(express.static(__dirname + '/public'))
            .listen(3000);
