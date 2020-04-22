const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

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