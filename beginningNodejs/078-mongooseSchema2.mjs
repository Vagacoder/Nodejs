/*
 * node js, module mongoose, connect to db 
 */

import mongoose from 'mongoose';

// * same as 077
const tankSchemma = new mongoose.Schema({name:'string', size:'string'});
tankSchemma.methods.print = function(){
    console.log('I am', this.name, 'the', this.size);
};

const Tank = mongoose.model('Tank', tankSchemma);

// * connect to database
mongoose.connect('mongodb://localhost:27017/demo');
const db = mongoose.connection;

db.once('open', function callback(){
    console.log('connected');

    // * create instance of model
    const tony = new Tank({name: 'tony', size:'small'});
    tony.print();

    // * save instance
    tony.save(function(err){

        // * query instance of model
        Tank.findOne({name: 'tony'}).exec(function(err, tank){
            tank.print();

            db.collection('tanks').drop(function(){
                db.close();
            });
            // db.close();
        });
    });

});
