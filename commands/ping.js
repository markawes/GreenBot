const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let m = await message.channel.send({embed: {title: "One moment please.", color: 0xFF000, author: {name: client.user.tag, icon_url: client.user.displayAvatarURL}}});
        m.edit({embed: {
            color: 0xFF000,
            title: `<:Greenbot:526224686560968715> ${client.user.username} Status <:Greenbot:526224686560968715>`,
            fields: [
                {
                    name: `Latency`,
                    value: `${m.createdTimestamp - message.createdTimestamp}ms`,
                    inline: true
                },
                {
                    name: `API Latency`,
                    value: `${Math.round(client.ping)}ms`,
                    inline: true
                }
            ],
            timstamp: new Date()
        }})
}

module.exports.help = {
   name: "ping"
}
