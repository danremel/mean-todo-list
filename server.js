const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const index = require('./routes/index');
const tasks = require('./routes/tasks');

const app = express();
// PORT
let port = process.env.PORT || 3000;

// View Engine (ejs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Sets the engine in use
app.engine('html', require('ejs').renderFile); // Renders files with html extension

// Static Folder
app.use(express.static(__dirname/*, '/client/components'*/));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', index); // Home page route
app.use('/api', tasks); // API call routes

// Start the server
app.listen(port, function() {
  console.log('App connected to port: ', port);
});