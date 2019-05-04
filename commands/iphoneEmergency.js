const jeff = require('jimp');
module.exports.run = async (bot,message, args) =>
 { //eslint-disable-line no-unused-vars
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`emergency`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
        const src = await jeff.read('https://mark-wesley.co.uk/i/OVD.jpg');
        const text = args.slice(0).join(' ');
       // message.channel.startTyping();
        jeff.loadFont(jeff.FONT_SANS_32_BLACK).then(font => {
            src.print(font, 45, 525, text)
                .getBuffer(jeff.MIME_PNG, (err, buffer) => {
                   // message.channel.stopTyping();
                    message.channel.send({ file: buffer, name: 'emergencyOVD.png' });
                });
        });
    },


module.exports.help = {
    name: "emergency"
}