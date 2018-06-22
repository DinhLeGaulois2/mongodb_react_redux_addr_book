// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

require("./routes/api-routes-delete.js")(app);
require("./routes/api-routes-insert.js")(app);
require("./routes/api-routes-read.js")(app);
require("./routes/api-routes-update.js")(app);
require("./routes/auth-routes.js")(app);

// server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);