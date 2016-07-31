var express = require('express');
var router = express.Router();
var data = require("../data");
var signin = data.signin;

router.post("/", (req, res) => {
    console.log('something is called..')
    res.render("signin/seekersignup", {});
});

module.exports = router;