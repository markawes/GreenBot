const Discord = require("discord.js");
const {RichEmbed} = require('discord.js');
const fs = require("fs");
let commandList = fs.readFileSync('./GreenBotCommands.txt', 'utf-8');
let ownerCommands = fs.readFileSync('./GreenBotOwnerCommands.txt', 'utf-8');
let adminCommands = fs.readFileSync('./GreenBotAdminCommands.txt', 'utf-8');
module.exports.run = async (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`help`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
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

    const adminCommand = new RichEmbed()
    .setColor(0x00ff33)
    .setAuthor("GreenBot Command List")
    .setDescription(adminCommands)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Command list requested by ${message.author.username}`)
    message.channel.send({embed: adminCommand});

    const ownerCommand = new RichEmbed()
    .setColor(0x00ff33)
    .setAuthor("GreenBot Command List")
    .setDescription(ownerCommands)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Command list requested by ${message.author.username}`)
    message.channel.send({embed: ownerCommand});
}

module.exports.help = {
    name: "help"
}