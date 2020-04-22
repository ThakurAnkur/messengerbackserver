const getUser = require("../../database/operations/getUser").getUser;
const password = require("../../utils/password").password;

exports.verifyUser = function (req, res, next) {
    const findQuery = {
        password: req.params.password,
        phoneNumber: req.params.phoneNumber
    }
    getUser(findQuery, function (result, docs) {
        const responseData = {};
        responseData.docs = docs;
        responseData.result = result;
        res.send(JSON.stringify(responseData));
    })
}