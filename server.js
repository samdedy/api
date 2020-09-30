const compression = require('compression');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Database MySQL - Definisikan route
const getRoute = require('./routes/route-get');

server.use(cors());
server.use(compression());
server.use(express.static("public"));
server.use(bodyParser.json({limit: "4mb"}));
server.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

server.use(getRoute);