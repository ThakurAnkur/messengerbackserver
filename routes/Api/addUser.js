const addUserDB = require("../../database/operations/addUser").addUser;
const user = require("../../database/schema/user").user;
const password = require("../../utils/password").password;

// For Password encryption
const saltRounds = 10;

exports.addUser = function (req, res, next) {
    var params = req.params;
    password.encryptPassword(params.password, function (hash) {
        let newUser = new user(params.phoneNumber, params.firstName, params.lastName, hash);
        addUserDB(newUser, function (result, docs) {
            const responseData = {};
            responseData.docs = docs;
            responseData.result = result;
            res.send(JSON.stringify(responseData));
        });
    }
}