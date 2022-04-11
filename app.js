const express = require('express');
const cors = require('cors');

const server = express();

const serversController = require('./controllers/servers-controller');

server.use(cors({origin: "http://localhost:3000"}));

server.use(express.json());

server.use("/servers", serversController);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));