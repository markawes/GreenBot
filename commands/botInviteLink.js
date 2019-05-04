const Discord = require("discord.js")
const botSettings = require("../botConfig.json")
module.exports.run = (bot, message, args) => {
    if(!botSettings.greenOwner.includes(message.author.id)){
        return message.reply("This command is locked to the bot owner!"); //lock command to Green only.
        }
   const embed = new Discord.RichEmbed()
   .setTitle("Invite me to your server")
   .setDescription("https://discordapp.com/oauth2/authorize?client_id=432267856869064704&permissions=8&scope=bot")
   .setTimestamp();

   message.channel.send(embed)
}

module.exports.help = {
    name: "botlink"
}

