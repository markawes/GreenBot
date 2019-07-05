const cowsays = require("cowsay");

exports.run = async (bot, message) => {
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
