module.exports.run = async (bot, message) => {
  message.channel.send(`:computer: : ${bot.guilds.size}\n:busts_in_silhouette: : ${bot.users.filter(h => !h.bot).size}\n:robot: : ${bot.users.filter(b => b.bot).size}`)
}
module.exports.help = {
    name:"!"
}
