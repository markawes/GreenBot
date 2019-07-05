const Discord = module.require("discord.js");
//const moment = require("moment")
module.exports.run = async (bot, message, args) => { 
    let args1 = args.join(" ")
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`You're not the boss of me, you can't make me create [${args1}] :stuck_out_tongue_closed_eyes:`);
  
    message.guild.createChannel(`${args1}`, 'text')
    message.reply(`Success channel [${args1}] has been created`)

}

module.exports.help = {
    name: "createchannel",
}
