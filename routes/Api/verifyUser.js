const getUser = require("../../database/operations/getUser").getUser;
const password = require("../../utils/password").passwordManager;

exports.verifyUser = function (req, res, next) {
    const findQuery = {
        password: req.params.password,
        phoneNumber: req.params.phoneNumber
    }
    getUser(findQuery, function (dbResponse) {
        let message = "";
        if(dbResponse.valid){
            message = message + JSON.stringify(dbResponse.data);
        }
        else {
            message = "Invalid User Name or Password";
        }
        res.send(message);
    })
}