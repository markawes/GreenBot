module.exports.run = (bot, message) => {
  
    message.guild.fetchInvites()
    .then(invites => message.reply(`I found ${invites.size} invites codes in this guild`))
    .catch(console.error)
	
}

module.exports.help = {
    name:"checkinvites"
}
