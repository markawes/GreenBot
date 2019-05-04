const Discord = require("discord.js")
module.exports.run = (bot, message, args) => {
    {
    const args = message.content.split(" ").slice(1).join("")
    if (!args) return message.reply("**Type a players name**");
    const image = (`https://minotar.net/armor/body/${args}`);

    const mcEmbed = new Discord.RichEmbed()
    .setTitle("Minecraft Player Skin")
    .setFooter(`Requested by ${message.author.username}`)
    .setDescription(`You asked us to search for ${args}`)
    .setColor(0x2caecb)
    .addField("We found", "the following image")
    .setImage(`${image}`)
    .setThumbnail(`${image}`)
    .setTimestamp()
    message.channel.send(mcEmbed)
    }
}

module.exports.help = {
    name:"mcs"
}