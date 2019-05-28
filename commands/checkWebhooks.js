module.exports.run = (bot, message) => {
  if(!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`I need "Manage Webhooks" permission to view the webhooks in the server!`)
  message.guild.fetchWebhooks()
    .then(webhooks => message.reply(`I found ${webhooks.size} webhooks in this guild`)).catch(console.error);
	}

module.exports.help = {
    name:"webhooks"
}
