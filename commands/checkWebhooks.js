module.exports.run = (bot, message) => {
  let commandLog = bot.channels.get('530923952412033044')
    let command = ("`checkwebhooks`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    message.guild.fetchWebhooks()
    .then(webhooks => message.reply(`I found ${webhooks.size} webhooks in this guild`)).catch(console.error);
	}

module.exports.help = {
    name:"checkwebhooks"
}
