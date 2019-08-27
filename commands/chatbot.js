const {get} = require("superagent")
module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send({embed: {title: "Thinking.... ", color: 0xFF000}});
    try{
     if(!args[0]) return msg.edit({embed: {title: "Well.. give me something to think about!", color: 0xFF0000}});
    message.channel.startTyping(true)
    let {body} = await get(`https://some-random-api.ml/chatbot/?message=${args.join(" ")}`)
    if(body){
    msg.edit({embed: {title: "<:Greenbot:526224686560968715> Chat Bot <:Greenbot:526224686560968715>", description: body.response, color: 0xFF000}})
    await message.channel.stopTyping(true)
    }else{
    await message.channel.stopTyping(true)
    msg.edit({embed: {title: `No response, ***Sad ${bot.user.username} noise***`, color: 0xFF0000}})
    }
    }catch(e){
    msg.edit({embed: {title: "Ouch.. that got me thinking to hard.. I got a error", description: e.message, color: 0xFF0000}})
    }
}

module.exports.help = {
    name:"chat"
}
