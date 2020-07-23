/*
 * node js, module express, with own static middleware
 */

import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express().use(express.static(__dirname + '/public')).listen(3000);
