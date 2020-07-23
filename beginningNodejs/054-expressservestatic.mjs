/*
 * node js, module express and serve-static 
 */

import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';

// const __dirname = process.cwd();
const __dirname = path.resolve();

const app = express()
            .use(serveStatic( __dirname + '/public'))
            .listen(3000);
