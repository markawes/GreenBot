const Discord = require("discord.js"), botConfig = require('../botConfig');
module.exports.run = (bot, message, args) => {
    message.channel.send({embed: {title: "My prefix", description: botConfig.prefix, color: message.member.displayColor, timestamp: new Date()}})
}
module.exports.help = {
    name: "prefix"
}
