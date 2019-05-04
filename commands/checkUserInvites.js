module.exports.run = (bot, message) => {
  let commandLog = bot.channels.get('530923952412033044')
    let command = ("`checkinvites`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    message.guild.fetchInvites()
    .then(invites => message.reply(`I found ${invites.size} invites codes in this guild`))
    .catch(console.error)
	
}

module.exports.help = {
    name:"checkinvites"
}
