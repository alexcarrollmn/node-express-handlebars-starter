var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/cubes/import");
    res.render("home", {body: "project/modelling/cubes/import"});
});


module.exports = router;