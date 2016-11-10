// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const ModelClass = require('./models/user');

// App Set up
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
