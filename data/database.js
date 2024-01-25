const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let databse;

async function connect(){

    const client = await MongoClient.connect('mongodb://127.0.0.1:27017') ;
    databse=client.db('tour') ;
}

function getDB(){
    if(!databse){
        throw{message:'Database not established'}
    }
    return databse ;
}

module.exports = {
     connectToDataBase:connect,
     getdb:getDB,
} ;
