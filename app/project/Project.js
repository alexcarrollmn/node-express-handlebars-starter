var express = require('express');
var router = express.Router();

router.get("/new", function(req, res){
    console.log("sending /project/new");
    res.render("home", {body: "project/new"});
});


router.get("/", function(req, res){
    console.log("sending /project");
    res.render("home", {body: "project"});
});


module.exports = router;