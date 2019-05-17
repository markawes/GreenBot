module.exports.run = async (bot, message) => {
  message.channel.send(`Guilds : ${bot.guilds.size}\nHoomans : ${bot.users.filter(h => !h.bot).size}\nBots : ${bot.users.filter(b => b.bot).size}`)
}
module.exports.help = {
    name:"!"
}
