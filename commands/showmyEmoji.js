module.exports.run = (bot, message, args) => {
    if (!message.guild.emojis.size)
    return message.channel.send("This server has no custom emoji :frowning:");

    message.channel.send(`Here is a list of all custom emoji here at ${message.guild.name}\n\n`);

    //now the fun begins

    const greenEmoji = message.guild.emojis.map(e => e.toString());
    let temp = '';

    greenEmoji.forEach((e, i, arr) => {
        if (temp.length + e.length < 2000) {
            temp+= ` ${e}`;
        }else {
            message.channel.send(temp);
            temp = ` ${e}`;
        }
        if (i === (greenEmoji.length - 1) && temp.length)
        message.channel.send(temp)
    });
}

module.exports.help = {
    name: "emoji"
}

//commands for use by GreensBot only - written my Mark
