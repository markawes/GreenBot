module.exports.run = async (bot, message, args) => {
    var request = require ("request")
    var mcIP = args[0];
    var mcPort = ""
    if (!mcIP) mcIP = 'rsmv.net'
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
    request(url, function(err, response, body) {
        if(err) {
            console.log(err);
            return message.reply('Error getting Minecraft server status...');
        }
        body = JSON.parse(body);
        var status = `${mcIP} is currently **offline**`;
        if(body.online) {
            status = `${mcIP} is **online**  -  `;
            if(body.players.now) {
                status += '**' + body.players.now + '** people are playing!';
            } else {
                status += '*Currently there are no players online!*';
            }
        }
        message.reply(status);
    });
}
;

module.exports.help = {
    name:"mss"
}
