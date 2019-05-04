
const botSettings = require("../botConfig.json");
const Discord = module.require("discord.js");
//const moment = require("moment")
module.exports.run = async (bot, message, args) => { 
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`playing`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
   
   if(!botSettings.ownerDev.includes(message.author.id)){
        return message.channel.send("This command is locked to the bot owner and the bot developer!");
        } 
    var game = args.join(" ").trim();
    if(!game || game.length <1) game = null;
    bot.user.setPresence({ game: { name: game, type: 0} });
    message.delete().catch(console.error);
    }
      
module.exports.help = {
    name: "playing"
}
