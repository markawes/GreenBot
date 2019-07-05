module.exports.run = (bot, message) => {
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I need "Ban Members" permission to view the bans in the server!`)
 
    message.guild.fetchBans()
	.then(bans => message.channel.send(`This guild has ${bans.size} banned users`))
	.catch(console.error);
}

module.exports.help = {
    name:"checkbans"
}
