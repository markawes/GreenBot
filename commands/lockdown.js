const ms = require('ms');
const botSettings = require("../botConfig.json")
exports.run = (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`lockdown`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    if(!botSettings.ownerDev.includes(message.author.id)){
        return message.channel.send(":x: Nice try, but you do not have permission to authorise a lockdown!");
        } 
    if (!bot.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock', 'pizza', 'cheese']


  
    if (!time) return message.reply('you must set a duration for the lockdown in either hours, minutes or seconds.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send('**Lockdown lifted.**');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`**Channel locked** for ${ms(ms(time), { long:true })}.`).then(() => {

                bot.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('**Lockdown lifted.**')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};

module.exports.help = {
    name: 'lockdown',
};