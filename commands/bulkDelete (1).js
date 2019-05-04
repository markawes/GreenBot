const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to mass delete messages.");
    var clipper = message.author.username
    var botuser = bot.user.username
	let mention = message.mentions.users.first();
	let modlog = bot.channels.get('430436180723499010')
	const guild = message.guild.name
	let chan  = message.channel.name
	const secretchan = message.guild.channels.find("name", "logs");
	if(!modlog) return message.reply("You need to create a channe called logs.");
	if(!secretchan) return message.reply("Prune Failed : Please create a channel called `logs` so you can log the prune events")
	let amount;
	if(mention) {
		amount = 100
	} else {
		amount = parseInt(args[0]);
		if(!amount || amount < 1 && amount < 100) return message.channel.send("Please enter a number between 1 and 100.");
		amount = Math.min(amount + 1, 100);
	}

	try {
		let messages = await message.channel.fetchMessages({limit: amount});
		messages = messages.filter(m => m.createdTimestamp >= Date.now() - 1179360000);
		
		let mention = message.mentions.users.first();
		if(mention) messages = messages.filter(m => m.author.id === mention.id || m.content === message.content);

		let pruned = messages.size;
		if(pruned < 1) return message.channel.send("No clip-able messages were found.");
		await message.channel.bulkDelete(messages);
		
		//modlog.send(`**MOD LOG** ${clipper} has asked ${botuser} to delete ${pruned === amount ? pruned - 1 : pruned} messages from [${chan}], this was successful.`)
		//.then(m => m.delete(5000));

		const embed = new Discord.RichEmbed()
  .setAuthor(`Mod action by ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Messages Pruned:', `**${clipper}** has asked **${botuser}** to delete **${pruned === amount ? pruned - 1 : pruned}** messages from [${chan}] in ${guild}`)
.addField('Status', `Successful ${pruned === amount ? pruned - 1 : pruned} messages were deleted!`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor(0x00ff33)
  .setTimestamp();
	modlog.send({embed})
	secretchan.send({embed})
	message.channel.send({embed}).then(m => m.delete(5000));
	
	} catch(e) {
		modlog.send(`Prune failed: ${e.message}`);
	}
}

module.exports.help = {
    name: "clip" 
}



//Command taken from MarksBot but changed here becuase why not :D
// Added variables clipper | botuser 
//Added line 2 to prevent people without the MANAGE_MESSAGES permission from running the command
//Modified the code to send actions, a staff channel as pruning messages is not sent to the Discord Audit Log
// Changed code to show embed with some nice information
//Changed modlog variable to get channel ID instead of name incase you want to change the name of the channel
//Last modified : Thursday 5th April 2018 03:09am by Mark