const fetch = require("snekfetch")
module.exports.run = async (bot, message, args) => {
    try{
     if(!args[0]) return message.reply("Please talk to me!")
    message.channel.startTyping(true)
    let {body} = await new fetch("GET", `https://some-random-api.ml/chatbot/?message=${args.join(" ")}`)
    message.channel.send(body.response)
await message.channel.stopTyping(true)
    }catch(e){
    message.channel.send(`Error while running the command:\n${e}`)
    }
}

module.exports.help = {
    name:"chat"
}
