module.exports.run = async (bot,message) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`dice`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    var result = Math.floor((Math.random() * 6) + 1);
    message.reply(`You rolled a 6 sided :game_die: and got **${result}**`);
}

module.exports.help = {
    name: "dice"
}