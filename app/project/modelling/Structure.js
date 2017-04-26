var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/structure");
    res.render("home", {body: "project/modelling/structure"});
});


module.exports = router;