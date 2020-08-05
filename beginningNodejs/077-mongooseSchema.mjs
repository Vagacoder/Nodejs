/*
 * node js, module mongoose, schema, local operations
 */

import mongoose from 'mongoose';

// * define a schema
const tankSchema = new mongoose.Schema({name:'string', size:'string'});
tankSchema.methods.print = function(){ console.log('I am', this.name, 'the', this.size)};

// * compile schema to a model
const Tank = mongoose.model('Tank', tankSchema);

// * create instance of the model
const waterTank = new Tank({name:'water bottle', size: '1 liter'});
waterTank.print();

waterTank.save(function(err){
    if(err){
        throw err;
    }
})