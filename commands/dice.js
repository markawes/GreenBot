module.exports.run = async (bot,message) => {
    var result = Math.floor((Math.random() * 6) + 1);
    message.reply(`You rolled a 6 sided :game_die: and got **${result}**`);
}

module.exports.help = {
    name: "dice"
}
