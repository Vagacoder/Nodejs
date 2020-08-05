/*
 * node js, module mongodb, basic 
 * (1) there are 2 modifictions to get db and coolection
 * (2) Also note that, demonPerson object is modified after insertion.
 */

import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const demoPerson = {
    name: 'John',
    lastName: 'Smith'
};

const findKey = {name: 'John'};

// * here is modification #1
MongoClient.connect('mongodb://localhost:27017', function(err, connection){
    if(err){
        throw err;
    }

    console.log('Successfully connected');
    console.log('demoPerson before insertion:', demoPerson);

    // * here is modification #2
    const db = connection.db('demo');

    const collection = db.collection('people');

    collection.insertOne(demoPerson, function(err, docs){
        console.log('Inserted', docs[0]);
        console.log('Id:', demoPerson._id);

        // ! Note: demonPerson is modified after insertion
        console.log('demoPerson after insertion:', demoPerson);

        collection.find(findKey).toArray(function(err, results){
            console.log('Found results:', results);
            collection.remove(findKey, function(err, results){
                console.log('Deleted person');

                connection.close();
            });
        });

    });
});
