const fetch = require("snekfetch")
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Please talk to me!")
    message.channel.startTyping(true)
    let {body} = await new fetch("GET", `https://some-random-api.ml/chatbot/?message=${args.join(" ")}`)
    message.channel.send(body.response)
await message.channel.stopTyping(true)
}

module.exports.help = {
    name:"chat"
}