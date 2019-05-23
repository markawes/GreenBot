const Discord = require("discord.js")
const cows = require('cows');
const rn = require('random-number');
module.exports.run = async (bot, message, args) => {
  let commandLog = bot.channels.get('530923952412033044')
  let command = ("`cow` - (Display random ASCII cow)")
  let guild = message.guild.name
  commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)

    var options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    }
    let random = rn(options);
    message.channel.send(cows()[random], {code: ""})
}

 
 module.exports.help = {
    name: "cow",
}
