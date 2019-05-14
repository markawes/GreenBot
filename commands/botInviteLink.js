const Discord = require("discord.js")
const botSettings = require("../botConfig.js")
module.exports.run = (bot, message, args) => {
    if(!botSettings.ownerDev.includes(message.author.id)){
        return message.reply("This command is locked to the bot owner!"); //lock command to Green only.
        }
        let commandLog = bot.channels.get('530923952412033044')
        let command = ("`botlink`")
        let guild = message.guild.name
        commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
   const embed = new Discord.RichEmbed()
   .setTitle("Invite me to your server")
   .setDescription("https://discordapp.com/oauth2/authorize?client_id=432267856869064704&scope=bot&permissions=2080767222")
   .setTimestamp();

   message.channel.send(embed)
}

module.exports.help = {
    name: "botlink"
}

