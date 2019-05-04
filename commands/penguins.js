const Discord = module.require("discord.js")
const randomPenguin = require("random-penguin")
const moment = require("moment")
module.exports.run = async (bot, message) => {

    let msg = await message.channel.send("Searching for Penguins");
    if(!randomPenguin) return message.channel.send("Could not locate any Penguins :frowning:")
        randomPenguin().then(url => {
           
            msg.channel.send(`${url}`)
        })
}

module.exports.help = {
    name: "penguin"
}