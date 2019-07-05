module.exports.run = (bot, message) => {
	if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send(`I need "Manage Server" permission to view the invites in the server!`)

    message.guild.fetchInvites()
    .then(invites => message.reply(`I found ${invites.size} invites codes in this guild`))
    .catch(console.error)
	
}

module.exports.help = {
    name:"checkinvites"
}
