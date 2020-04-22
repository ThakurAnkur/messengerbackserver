const spawnConnection = require('../db').spawnConnection;

exports.getUser = function (params, callback) {
    const client = spawnConnection();
    client.connect(err => {
        const collection = client.db("users").collection("users");
        let result = false;
        const findQuery = {
            password: params.password,
            phoneNumber: params.phoneNumber
        }

        collection.find(findQuery).toArray(function (err, docs) {
            if (docs != undefined && docs.length) {
                result = true;
            }
            else {
                result = false;
            }
            client.close();
            callback(result, docs);
        });
    })
}