var express = require('express');
var router = express.Router();

var TerboIntegratorChores = require('./TerboIntegratorChores');

router.use("/chores", TerboIntegratorChores);

router.get("/", function(req, res){
    console.log("sending /project/modelling/terbo-integrator");
    res.render("home", {body: "project/modelling/terbo-integrator"});
});


module.exports = router;