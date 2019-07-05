const Discord = require("discord.js")
const botSettings = require("../botConfig.js")
module.exports.run = (bot, message, args) => {
   const embed = new Discord.RichEmbed()
   .setTitle("Invite me to your server")
   .setDescription(`https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2080767222`)
   .setTimestamp();

   message.channel.send(embed)
}

module.exports.help = {
    name: "botlink"
}

