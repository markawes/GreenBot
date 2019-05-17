const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
      if(!bot.odevs.includes(message.author.id)) return message.react("❌")
      if(!args[0]) return message.channel.send(`And... the server id is?.. or do I have to read you mind..`);
      if(isNaN(args[0])) return message.channel.send(`Come on mate.. give me a valid server id..`);
      let guild = await bot.guilds.get(args[0])
      if(!guild) return message.channel.send(`Well.. uh, what is the valid server id?..`);
      let msg = await message.channel.send(`Trying to leave.. ${guild.name}, one moment please..`);
      try{
const owner = bot.users.get('188861825100677120')
 const embed = new Discord.RichEmbed()
 .setColor("#ff0000")
 .setAuthor(`${bot.user.username} has left this server`, bot.user.displayAvatarURL)
 .setTitle(`The powers above have requested that I ${bot.user.username} leave this server, for more information please join the support server`)
 .setThumbnail(bot.user.displayAvatarURL)
 .addField(`${bot.user.username} Support Server`, "https://discord.gg/YGMcEQ3")
 .addField(`BOT Owner`, `${owner.tag}`) 
 let channel = await guild.channels.filter(c => c.type === "text" && c.permissionsFor(guild.me).has(["EMBED_LINKS", "SEND_MESSAGES"])).first()
 if(channel){channel.send(embed)}     
 await guild.leave().then(async () => {
      return msg.edit(`Successfully left.. ${guild.name}`);
      })
}catch(e){
return msg.edit(`Error while trying to leave: ${args[0]}:\n${e}`)
}
}

module.exports.help = {
    name: "leave"
}
