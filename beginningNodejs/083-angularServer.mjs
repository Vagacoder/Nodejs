/*
 * node js, module express, body-parser, plus mongodb implementation
 * P.192 Listing 9-9
 * 
 * Compare this one with example of ch7 at P.160, see 072-expressRouter.mjs
 * Test using curl, P.162
 */

import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';
import path from 'path';

// * Express App
const app = express();

// * create mongodb connection
const MongoClient = mongodb.MongoClient;

let db;
let itemsCollection;

MongoClient.connect('mongodb://localhost:27017', (err, connection)=>{
    if(err){
        throw err;
    }

    db = connection.db('demo');
    itemsCollection =db.collection('items');

    app.listen(3000);
    console.log('Listening on port 3000.');
});

const router = express.Router();
router.use(bodyParser.json());

router.route('/')
        .get((req, res, next) =>{
            itemsCollection.find().toArray((err, docs)=>{
                res.send({
                    status: 'Items found',
                    items: docs
                });
            });
        })
        .post((req, res, next)=>{
            let item = req.body;
            itemsCollection.insert(item, (err, docs)=>{
                res.send({
                    status: 'Item added',
                    itemId: item._id
                });
            });
        })

router.route('./:id')
        .delete((req, res, next) =>{
            let id = req.params['id'];
            let lookup = { _id: new mongodb.ObjectID(id)};
            itemsCollection.remove(lookup, (err, results) =>{
                res.send({ status: 'Item cleard'});
            });
        });

const __dirname = path.resolve();

app.use(express.static(__dirname + '/public'))
    .use('/todo', router);