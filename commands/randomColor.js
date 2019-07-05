const Discord = require ("discord.js");
module.exports.run = (bot, message) => {
var randColor = Math.floor(Math.random() * 16777214) + 1

console.log(randColor)
const embed = new Discord.RichEmbed()
.setAuthor(`Random Color Generator`)
.setColor(randColor)
.setDescription(`Random color generated: ${randColor}\n${randColor} is equal to #${randColor.toString(16).toUpperCase()}`)


message.channel.send({embed})
}
module.exports.help = {
    name: "color"
}
