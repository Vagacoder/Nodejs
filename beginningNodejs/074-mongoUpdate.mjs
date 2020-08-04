/*
 * node js, module mongod
 * update a document 
 */

import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const demoPerson = {
    firstName: 'John',
    lastName: 'Smith'
};

const query = {firstName:'John'};

MongoClient.connect('mongodb://localhost:27017', (err, db)=>{
    if(err){
        throw err;
    }

    const dbo = db.db('demo');
    const collection = dbo.collection('people');

    collection.insertOne(demoPerson, (err, docs)=>{
        demoPerson.lastName = 'Martin';
        collection.save(demoPerson, (err)=>{
            console.log('Updated!');
            collection.find(query).toArray((err, arr) => {
                console.log(arr);
                
                db.close();
            })
        })
    })
});

