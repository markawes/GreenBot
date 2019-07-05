const Discord = module.require("discord.js");
//const moment = require("moment")
module.exports.run = async (bot, message, args) => { 

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You are not allowed to ban users");
//if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("GiraffeBot does not have permission to ban users");
if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("GiraffeBot does not have permission to ban users");
let user = message.mentions.users.first();
let reason = "One Week Ban"
//let modlog = message.guild.channels.find("name", "moderation-logs");

//if(!modlog) return message.reply("This server does not have any channel called `moderation-logs`");
if (message.mentions.users.size < 1) return message.reply("Please mention someone to ban");
if(!reason) return message.reply("You must supply a reason for baning this user");
if(!message.guild.member(user).bannable) return message.reply("This user cannot be banned because GreenBot likes them too much or they are a higher rank than you.");

//message.guild.member(user).ban();
message.guild.ban(user, { days: 7, reason: 'One Week Ban' })

// const embed = new Discord.RichEmbed()
// .setAuthor(`I have Banned ${user.username}`, user.displayAvatarURL)
// .setColor("0x2caecb")
// .addField("Ban Information", `**Banned User:** ${user.tag}\n**Banned By** ${message.author.tag}\n**Reason:** ${reason}`)
// .setTimestamp()
// modlog.send({embed})
message.channel.send(`${user.username} has been banned for 7 days :wave:`);

}

module.exports.help = {
    name: "7dayban",
}
