var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/data/import");
    res.render("home", {body: "project/modelling/data/import"});
});


module.exports = router;