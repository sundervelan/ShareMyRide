var express = require('express');
var router = express.Router();
var providerRoutes = require("./provider");
var seekerRoutes = require("./seeker");
var signinRoutes = require("./signin");


var constructorMethod = (app) => {
    app.use("/signup/seekersignup", signinRoutes);
    app.use("*", (req, res) => {
        res.render("signin/initial", {});
    })
};

module.exports = constructorMethod;