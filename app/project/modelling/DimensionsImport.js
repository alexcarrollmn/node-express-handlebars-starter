var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/dimensions/import");
    res.render("home", {body: "project/modelling/dimensions/import"});
});


module.exports = router;