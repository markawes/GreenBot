const got = require('got');

exports.run = async (bot, message) => {
    //await message.reply(':arrows_counterclockwise:');
    const {
        body
    } = await got('http://belikebill.azurewebsites.net/billgen-API.php?default=1', {
        encoding: null
    });

    await message.channel.send({
        file: {
            attachment: body,
            name: 'bill.jpg'
        }
    });

    message.delete();
};

module.exports.help = {
    name:"bill"
}