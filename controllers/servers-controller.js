const express = require("express");
const router = express.Router();
const serversLogic = require('../logic/servers-logic');

// Method: GET
// url: /servers/
//getAllServers()
router.get("/", async (request, response) => {
    try {
        let servers = await serversLogic.getAllServers();

        response.json(servers);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

// EDIT server
// PUT http://localhost:3000/servers
//updateStatus(status, id)
router.put("/", async (request, response) => {
    try {
        let status = request.body.status;
        let serverId = request.body.serverId;
        await serversLogic.updateStatus(status, serverId);

        response.json();
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
});

module.exports = router;