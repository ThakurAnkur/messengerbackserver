const spawnConnection = require('../db').spawnConnection;
const checkForPhoneNumber = require("./checkForPhoneNumber").checkForPhoneNumber;

exports.addUser = function (newUser, callback) {
    checkForPhoneNumber(newUser.phoneNumber, (result, data) => {
        if (result) {
            // User already exist.
            callback("User Already Exist", data);
        }
        else {
            const client = spawnConnection();
            client.connect(err => {
                const collection = client.db("users").collection("users");
                let result = false;
                collection.insertOne(newUser, (err, result) => {
                    callback("Added user", result);
                })
            })
        }
    });
}