module.exports.run =(bot, message, args) => {
    const ItsGreenMotherFuckers = bot.emojis.find(e => e.name === `${args}`);
    if(!ItsGreenMotherFuckers) return message.channel.send("The request emoji could not be found - names are CaSe SeNsItIvE") 
    else {
    message.channel.send(`${ItsGreenMotherFuckers}`)
    }
}
    module.exports.help = {
        name: "esearch"
    }
