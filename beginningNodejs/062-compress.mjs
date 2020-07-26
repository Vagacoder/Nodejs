/*
 * node js, module express and compression 

 * $ curl http://127.0.0.1:3000 -i --compressed

 */

import express from 'express';
import compression from 'compression';
import path from 'path';

const __dirname = path.resolve();

const app = express()
            .use(compression())
            .use(express.static(__dirname + '/public'))
            .listen(3000);
