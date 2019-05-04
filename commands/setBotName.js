const Discord = require('discord.js');
module.exports.run = (bot, message, args) => {
if(message.author.id !== "272442568275525634") return message.reply("This command is **NOT** to be abused (Due to Discord API restrictions), contact Mark if you want to use it")
bot.user.setUsername(args[0]);
message.reply("Bot username changed!")
};

module.exports.help = {
    name:"setname"
}

//put this commands in a try, catch block eventually