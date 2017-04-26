const express = require('express'),
	  exphbs  = require('express-handlebars'),
	  path = require('path'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser');

var app = express();



//how about some templating setup?
var hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: [
        'views/partials/'
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//give me some static paths!
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
app.use('/public', express.static(path.join(__dirname, 'public')));

//route that request!
var Project = require("./app/project/Project");
app.use("/project", Project);

app.get("/", function (req, res) {
	res.render("home", {body: "hello"});
});


//let's start this thing!
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Server starting');
});