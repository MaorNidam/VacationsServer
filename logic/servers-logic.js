const serversDal = require('../dal/servers-dal');

async function getAllServers() {
    let servers = await serversDal.getAllServers();
    for (let server of servers) {
        if (server.isOnlineStatus == 1) {
            server.isOnlineStatus = true;
        }
        else {
            server.isOnlineStatus = false;
        }
    }
    return servers;
}

async function updateStatus(status, serverId) {
    await serversDal.updateStatus(status, serverId)
}

module.exports = {
    getAllServers,
    updateStatus
}