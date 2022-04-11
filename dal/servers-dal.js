let connection = require("./connection-wrapper")


async function getAllServers() {
    let sql = `SELECT s.id, s.name as serverName, s.ip, case when s.status = "online" then 1 else 0 end as isOnlineStatus, s.time_created as timeCreated, c.name as companyName ` +
        `FROM mission.servers s join mission.company c ` +
        `on s.hosting_company_id = c.id;`;
    let servers = await connection.execute(sql);
    return servers;
}

async function updateStatus(status, serverId) {
    let sql = "UPDATE mission.servers SET status = ? WHERE id = ?;";
    let parameters = [status, serverId];
    await connection.executeWithParameters(sql, parameters);
}

module.exports = {
    getAllServers,
    updateStatus
}
