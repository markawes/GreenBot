module.exports.run = (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`COMMAND NAME`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)

    // do stuff
}

module.exports.help = {
    name:"commandName"
}

//Command structure - begin with the command log code then do stuff 
// Note to Mark when creating new commands (will still probably forget about this tho)