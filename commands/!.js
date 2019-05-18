const Discord = require("discord.js")
module.exports.run = async (bot, message) => {
  const e = new Discord.RichEmbed()
  .setAuthor(`${bot.user.username}`)
  .setTitle(`Some Stats`)
  .setDescription(`Guilds : ${bot.guilds.size}\nHuman Users : ${bot.users.filter(h => !h.bot).size}\nBots : ${bot.users.filter(b => b.bot).size}`)
  .setThumbnail("https://greenbot.mwserver.co/images/coolBlob.gif")
  .setFooter("Shocking markawes and SUPERCHIEFYT since 2019")
  message.channel.send(e)
}

module.exports.help = {
    name:"!"
}
