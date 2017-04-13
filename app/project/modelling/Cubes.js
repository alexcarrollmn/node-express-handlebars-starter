var express = require('express');
var router = express.Router();

var CubesImport = require('./CubesImport');

router.use("/import", CubesImport);

router.get("/", function(req, res){
    console.log("sending /project/modelling/cubes");
    res.render("home", {body: "project/modelling/cubes"});
});


module.exports = router;