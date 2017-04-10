var express = require('express');

/*****************************
	    App Variables
******************************/
var app = express();


app.set('port', 5000);
app.get("/", function (req, res) {

	res.send("<h1>hello</h1>");

});


app.listen(app.get('port'), function () {
  console.log('Server starting');
});