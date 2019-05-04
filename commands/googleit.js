module.exports.run = (bot, message) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`googleit`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    message.channel.send("https://i.imgur.com/X20kba7.gif")
}

module.exports.help = {
    name:"googleit"
}