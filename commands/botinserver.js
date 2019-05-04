module.exports.run = async (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`bots`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    var member = message.guild.members.filter(m => m.user.bot).size
    message.channel.send(`Here at ${guild} we have **${member}** bots`)
}

module.exports.help = {
    name:"bots"
}