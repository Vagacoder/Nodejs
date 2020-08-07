/*
 * node js, module express, For A simple Angular App
 * 
 * use ./public/index4.html
 */

import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express()
            .use(express.static(__dirname + '/public'))
            .listen(3000);

