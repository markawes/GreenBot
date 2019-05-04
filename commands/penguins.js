const Discord = module.require("discord.js")
const randomPenguin = require("random-penguin")
const moment = require("moment")
module.exports.run = async (bot, message) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`penguin`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)

    let msg = await message.channel.send("Searching for Penguins");
    if(!randomPenguin) return message.channel.send("Could not locate any Penguins :frowning:")
        randomPenguin().then(url => {
           
            msg.channel.send(`${url}`)
        })
}

module.exports.help = {
    name: "penguin"
}