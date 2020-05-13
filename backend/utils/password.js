const bcrypt = require("bcrypt");

saltRounds = 10;
exports.passwordManager = {
    encryptPassword: function (simplePassword, callback) {
        bcrypt.hash(simplePassword, saltRounds, function (err, hash) {
            callback(hash);
        });
    },
    verifyPassword: function (complexPassword, simplePassword, callback) {
        bcrypt.compare(simplePassword, complexPassword, function (err, result) {
            callback(result);
        }); 
    }
}