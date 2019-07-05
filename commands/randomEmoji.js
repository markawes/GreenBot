const Discord = require("discord.js")
module.exports.run = async (bot, message) => {
let msg = await message.channel.send(`One moment please..`)
setTimeout(async () => {
let randomemoji = bot.emojis.random()
return msg.edit(``, new Discord.RichEmbed().setImage(randomemoji.url).setColor("#009900").setImage(randomemoji.url))
}, 1500)
}
module.exports.help = {
    name:"re"
}
