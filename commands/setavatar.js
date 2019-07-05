const pizza = require("../botConfig.js")
exports.run = async (bot, message, args) => {
    try {
        if(pizza.ownerDev.includes(message.author.id)) {
         const avatar = args.join(" ");
            if(!avatar) return message.channel.send("Give me the URL of the image")
           await bot.user.setAvatar(avatar)
           message.channel.send("The avatar has been set")
            }
    } catch (err) {
        message.channel.send(err.message);
    }
}

module.exports.help = {
    name: "setavatar"
}

