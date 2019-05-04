const pizza = require("../botConfig.json")
exports.run = async (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`setavatar`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
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

