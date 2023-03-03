module.exports=dbConnect; 

var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://omzadafiya810911:YWzahikc5qS8XfUg@cluster0.xc6ddxn.mongodb.net/test';
const database = 'test';


async function dbConnect() {
    let result = await MongoClient.connect(url);
    let db = await result.db(database);
    return await db.collection('test');

}
