/*
 * node js, module mongodb, update operator
 */

import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const website = {
    url: 'https://www.google.com',
    visits: 0
};

const query ={
    url: 'https://www.google.com'
};

MongoClient.connect('mongodb://localhost:27017', (err, db)=>{
    if(err){throw err;}

    const dbo = db.db('demo');
    const collection = dbo.collection('websites');

    collection.insert(website, (err, docs)=>{
        let count = 0;

        function onCount(err){
            count++;
            if(count < 4){
                return;
            }
            collection.find(query).toArray((err, results)=>{
                console.log('Visits:', results[0].visits);
            })

            collection.drop(()=>{db.close();});
        }

        const incrementVisits = { '$inc' : {'visits': 1}};

        collection.update(query, incrementVisits, onCount);
        collection.update(query, incrementVisits, onCount);
        collection.update(query, incrementVisits, onCount);
        collection.update(query, incrementVisits, onCount);
    });
})