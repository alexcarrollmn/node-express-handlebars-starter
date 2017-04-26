var express = require('express');
var router = express.Router();

var DataImport = require('./DataImport');

router.use("/import", DataImport);

router.get("/", function(req, res){
    console.log("sending /project/modelling/data");
    res.render("home", {body: "project/modelling/data"});
});


module.exports = router;