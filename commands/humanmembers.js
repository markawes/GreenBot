module.exports.run = async (bot, message, args) => {
  
 var member = message.guild.members.filter(m => !m.user.bot).size
  message.channel.send(`Here at ${message.guild.name} we have **${member}** human members`)
}

module.exports.help = {
    name:"members"
}
