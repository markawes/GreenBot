const Discord = require("discord.js")
module.exports.run = (bot,message, args) => {
    let search = args[0];
    let emoji =bot.emojis.find(e => e.name === search) || bot.emojis.find(e => e.id === search)
    if(!emoji) return message.channel.send(`Nothing for that.`)
    let embed = new Discord.RichEmbed()
        .setColor(`#009900`)
        .setDescription(`Emoji Info`)
        .addField(`Emoji Name`, emoji.name, true)
        .addField(`Emoji ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated`, `${emoji.animated}`, true)
        .addField(`Managed by a service`, emoji.managed, true)
        .addField(`Emoji Server`, emoji.guild.name, true)
        .setThumbnail(emoji.url)
    message.channel.send(embed)
}

module.exports.help = {
    name:"emote"
}
