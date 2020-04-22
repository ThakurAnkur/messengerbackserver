const MongoClient = require('mongodb').MongoClient;


const username = "ankurthakur";
const password = "hRKiqNsLnw74Xxb";

const uri = `mongodb+srv://${username}:${password}@messenger-rxsxz.mongodb.net/test?retryWrites=true&w=majority`;
function spawnConnection() {
    return new MongoClient(uri, { useNewUrlParser: true });
}

exports.spawnConnection = spawnConnection;