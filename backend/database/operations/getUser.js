const spawnConnection = require('../db').spawnConnection;
const password = require("../../utils/password").passwordManager;

exports.getUser = function (params, callback) {
    const client = spawnConnection();
    client.connect(err => {
        const collection = client.db("users").collection("users");
        const findQuery = {
            phoneNumber: params.phoneNumber
        }

        collection.find(findQuery).toArray(function (err, docs) {
            let dbResponse;
            if (docs != undefined && docs.length) {
                let hashPassword = docs[0].password;
                delete(docs[0].password);
                password.verifyPassword(hashPassword, params.password, function (result) {
                    if (result) {
                        dbResponse = {
                            valid: true,
                            message: "Valid User",
                            data: docs[0]
                        };
                    }
                    else {
                        dbResponse = {
                            valid: false,
                            message: "Invalid Password",
                            data: docs[0]
                        };
                    }
                    client.close();
                    callback(dbResponse);
                });
            }
            else {
                dbResponse = {
                    valid: false,
                    message: "Invalid Phone Number",
                    data: docs[0]
                };
                client.close();
                callback(dbResponse);
            }
        });
    })
}