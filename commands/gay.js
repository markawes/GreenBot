const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`gay`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)

    let sus = Math.round(Math.random() * 100);
    let target = message.mentions.users.first() || message.author
    // let gayembed = new Discord.RichEmbed()
    //     .setColor("#00ff33")
    //     .setTitle(`:gay_pride_flag: **I think ${target} is ${sus}% gay!** :gay_pride_flag:`);
    // message.delete(10);
    // return message.channel.send(gayembed);
    message.channel.send(`:gay_pride_flag: **I think ${target} is ${sus}% gay!** :gay_pride_flag:`)
};

module.exports.help = {
    name: "gay"
}