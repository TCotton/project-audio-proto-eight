// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Set up



// Server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
