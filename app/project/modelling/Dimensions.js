var express = require('express');
var router = express.Router();

var DimensionsImport = require('./DimensionsImport');

router.use("/import", DimensionsImport);

router.get("/", function(req, res){
    console.log("sending /project/modelling/dimensions");
    res.render("home", {body: "project/modelling/dimensions"});
});


module.exports = router;