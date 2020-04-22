const spawnConnection = require('../db').spawnConnection;

exports.checkForPhoneNumber = function (phoneNumber, callback) {
    if (phoneNumber != undefined) {
        const client = spawnConnection();
        client.connect(err => {
            const collection = client.db("users").collection("users");
            let result = false;
            const findQuery = {
                phoneNumber: phoneNumber
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
}