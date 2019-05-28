module.exports.run = (bot, message) => {
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I need "Ban Members" permission to view the bans in the server!`)
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`checkbans`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    message.guild.fetchBans()
	.then(bans => message.channel.send(`This guild has ${bans.size} banned users`))
	.catch(console.error);
}

module.exports.help = {
    name:"checkbans"
}
