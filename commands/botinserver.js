module.exports.run = async (PB, message, args) => {
  
    var member = message.guild.members.filter(m => m.user.bot).size
    message.channel.send(`Here at ${message.guild.name} we have **${member}** bots`)
}

module.exports.help = {
    name:"bots"
}