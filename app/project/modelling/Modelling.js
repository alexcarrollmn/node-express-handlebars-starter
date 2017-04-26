var express = require('express');
var router = express.Router();

var Dimensions = require('./Dimensions');
router.use("/dimensions", Dimensions);

var Cubes = require('./Cubes');
router.use("/cubes", Cubes);

var Logic = require('./Logic');
router.use("/logic", Logic);

var Data = require('./Data');
router.use("/data", Data);

var Structure = require('./Structure');
router.use("/structure", Structure);

var TerboIntegrator = require('./TerboIntegrator');
router.use("/terbo-integrator", TerboIntegrator);

router.get("/", function(req, res){
    console.log("sending /project/modelling");
    res.render("home", {body: "project/modelling"});
});


module.exports = router;