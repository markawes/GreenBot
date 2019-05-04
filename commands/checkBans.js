module.exports.run = (bot, message) => {
    message.guild.fetchBans()
	.then(bans => message.channel.send(`This guild has ${bans.size} banned users`))
	.catch(console.error);
}

module.exports.help = {
    name:"checkbans"
}