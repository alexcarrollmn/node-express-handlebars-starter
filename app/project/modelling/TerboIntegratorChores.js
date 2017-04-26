var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/terbo-integrator/chores");
    res.render("home", {body: "project/modelling/terbo-integrator/chores"});
});


module.exports = router;