module.exports.run = async (bot, message, args) => {
    let BirthdayMsg = await message.channel.send("Birthday, what, buying a card");
    let target = message.mentions.users.first() || message.author;
    message.channel.send(`Happy birthday ${target}`)
    await message.channel.send({files: [
        {
             attachment: ('https://mark-wesley.co.uk/i/dBU.gif'),
             name: "GBHB.gif"
            }
    ]});

    BirthdayMsg.delete();
}
module.exports.help = {
    name: "birthday",
}