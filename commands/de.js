const Discord = require("discord.js")
const superagent = require("superagent")
const DEmojiJS = require("demojijs")
module.exports.run = async (bot, message, args) => {
//if(!message.channel.nsfw) return message.channel.send("Please run this command in an NSFW channel as it could show naughty emotes!")
if(message.guild.id === "264445053596991498") return;
    DEmojiJS.randomEmoji().then(async Emoji => {
let ei = new Discord.RichEmbed().setAuthor(message.author.username, message.author.displayAvatarURL).setColor(message.member.displayColor)
.setAuthor(`Uploaded by : [${Emoji.submitted_by}]`)
.setTitle(`Emoji Name : [${Emoji.title}]`)
.setImage(Emoji.image)
.setFooter("Random emoji from discordemoji.com")
    message.channel.send(ei);
 }).catch(console.error);
}

module.exports.help = {
    name:"de"
}

