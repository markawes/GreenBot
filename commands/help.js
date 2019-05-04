const Discord = require("discord.js");
const {RichEmbed} = require('discord.js');
const fs = require("fs");
let commandList = fs.readFileSync('./GreenBotCommands.txt', 'utf-8');
module.exports.run = async (bot, message, args) => {
    let embedMessages = message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS");
    if(!embedMessages) return message.channel.send("I do not have permission EMBED_LINKS");
    const embed = new RichEmbed()
    .setColor(0x00ff33)
    .setAuthor("GreenBot Command List")
    .setDescription(commandList)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Command list requested by ${message.author.username}`)
    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help"
}