const got = require('got');

exports.run = async (bot, message) => {
    await message.reply('Waking up Bill...');
    const {
        body
    } = await got('http://belikebill.mwserver.co/billgen-API.php?default=1', {
        encoding: null
    });

    await message.channel.send({
        file: {
            attachment: body,
            name: 'GreenBotbill.jpg'
        }
    });

    message.delete();
};

module.exports.help = {
    name:"bill"
}
