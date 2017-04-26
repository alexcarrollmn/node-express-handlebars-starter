var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
    console.log("sending /project/modelling/logic");
    res.render("home", {body: "project/modelling/logic"});
});


module.exports = router;