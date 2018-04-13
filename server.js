//requiring dependencies needed in this file
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());

//Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes and give the server access to them
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
	console.log('App now listening on localhost: ' + PORT);
});
