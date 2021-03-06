/*
 * node js, module mongoose, simple connection 
 */

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/demo');

const db = mongoose.connection;

db.on('error', (err)=>{throw err;});

db.once('open', ()=> {
    console.log('connected!');
    db.close();
    console.log('closed!');
});
