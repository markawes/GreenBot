const cowsays = require("cowsay");

exports.run = async (bot, message) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`cowsay`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
   // message.delete()
    var args = message.content.split(' ').slice(1).join(' ');
    if (!args) {
        return message.reply("What do you want the cow to say?");
    }

    message.channel.send(cowsays.say({
        text: args,
        e: 'oO'
    }), {code: 'css'});
    
}

exports.help = {
    name: "cowsay"
}