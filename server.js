const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const index = require('./routes/index');
const tasks = require('./routes/tasks');

const app = express();

let port = process.env.PORT || 3000;