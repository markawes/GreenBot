const Discord = require("discord.js")
module.exports.run = (bot, message) => {
let ev = new Discord.RichEmbed()
.setColor(`#FF000`)
.setTitle(`Vote for these bots`)
.setThumbnail(message.author.displayAvatarURL)
.addField("Elara", "https://discordbots.org/bot/455166272339181589/vote")
.addField(`MarksBot`, `https://discordbots.org/bot/417143274713776139/vote`)
.addField(`GreenBot`, `https://discordbots.org/bot/432267856869064704/vote`)
message.channel.send(ev)
}

module.exports.help = {
    name:"vote"
}
