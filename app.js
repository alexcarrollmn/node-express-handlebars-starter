var express = require('express');
var path = require('path');

/*****************************
	    App Variables
******************************/
var app = express();


app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 5000);
app.get("/", function (req, res) {

	res.send("<h1>hello</h1>");

});


app.listen(app.get('port'), function () {
  console.log('Server starting');
});