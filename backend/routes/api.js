const express = require('express');
const router = express.Router();


const verifyUser = require("./Api/verifyUser").verifyUser;
const addUser = require("./Api/addUser").addUser;

/* GET API listing. */
router.get('/', function (req, res, next) {
    res.send('Welcome to API');
});

/* GET User Details. */
router.get('/verifyuser/:phoneNumber/:password', verifyUser) ;

/* Add User Details. */
router.get('/adduser/:phoneNumber/:firstName/:lastName/:password', addUser) ;
module.exports = router;
