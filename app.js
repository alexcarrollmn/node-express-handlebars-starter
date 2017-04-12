var express = require('express'),
	exphbs  = require('express-handlebars'),
	path = require('path');

var app = express();

var hbs = exphbs.create({
    defaultLayout: 'main',

    partialsDir: [
        'views/partials/'
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {

	res.render("home", {body: "hello"});

});


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
  console.log('Server starting');
});