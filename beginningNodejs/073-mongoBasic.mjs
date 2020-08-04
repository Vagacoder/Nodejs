/*
 * node js, module mongodb, basic 
 */

import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const demoPerson = {
    name: 'John',
    lastName: 'Smith'
};

const findKey = {name: 'John'};

MongoClient.connect('mongodb://localhost:27017', function(err, db){
    if(err){
        throw err;
    }

    console.log('Successfully connected');

    const dbo = db.db('demo');
    const collection = dbo.collection('people');
    collection.insert(demoPerson, function(err, docs){
        console.log('Inserted', docs[0]);
        console.log('Id:', demoPerson._id);

        collection.find(findKey).toArray(function(err, results){
            console.log('Found results:', results);
            collection.remove(findKey, function(err, results){
                console.log('Deleted person');

                db.close();
            });
        });

    });
});
