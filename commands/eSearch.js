module.exports.run =(bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`esearch` - emoji search")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    const ItsGreenMotherFuckers = bot.emojis.find(e => e.name === `${args}`);
    if(!ItsGreenMotherFuckers) return message.channel.send("The request emoji could not be found - names are CaSe SeNsItIvE") 
    else {
    message.channel.send(`${ItsGreenMotherFuckers}`)
    }
}
    module.exports.help = {
        name: "esearch"
    }