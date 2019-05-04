const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let commandLog = bot.channels.get('530923952412033044')
   let command = ("`ping`")
   let guild = message.guild.name
   commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
   const m = await message.channel.send("Ping?");
   m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`)
}

module.exports.help = {
   name: "ping"
}