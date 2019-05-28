module.exports.run = (bot, message) => {
  message.guild.fetchWebhooks()
    .then(webhooks => message.reply(`I found ${webhooks.size} webhooks in this guild`)).catch(console.error);
	}

module.exports.help = {
    name:"webhooks"
}
