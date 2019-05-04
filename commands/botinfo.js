/** @ignore */
let usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
let usage = usageMb.toFixed(2);
const embedClass = require('../classes/embedMessage.js')

module.exports.run = async (bot, message) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`botinfo`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    // if (message.author.id !== '188861825100677120') {
    //     return message.reply(`This command is locked to Greensanoob`);
    // } //this is here incase you ever want to lock the command to yourself - up to you
    
    let embedMessage = new embedClass(message);

    const moment = require("moment");
    const ms = require ("ms");

    /**
     * @param {Object} author
     * @param {Array} {Object}
     * @param {String} color
     * @param {String} thumbnail
     * @param {String} footer
     * @return {Error}
     * @return {Promise}
     */
    embedMessage.advanced({
        author: {
            name: `Here is my information`,
            pic: bot.user.displayAvatarURL
        },
        fields: [{
            title: `My discord info`,
            content: `**Username:** ${bot.user.username}\n\
**Discriminator:** ${bot.user.tag}\n\
**ID:** ${bot.user.id}`,
        },
            {
                title: `Process:`,
                content: `**Online for:** ${ms(bot.uptime, {long: true})}\n\
**Memory Usage:** ${usage} MB\n\
**Enviroment:** ${require('os').platform()}`,
                inline: true
            },
            { 
                title:`Social`,
                content: `I am in **${bot.guilds.size}** server (s)\n\
**Total Users:** ${bot.users.filter(i => !i.bot).size}\n\
**Total Bots:** ${bot.users.filter(i => i.bot).size}`,
                inline: true
            }
            ],
            
              color: 0x00ff33,
              thumbnail: bot.user.displayAvatarURL,
              footer: `Requested by ${message.author.username} | ${moment(new Date).format('MM/DD/YYYY [at] hh:mm:ss a')}`  
            });
        };
    

module.exports.help = {
    name: "botinfo"
}