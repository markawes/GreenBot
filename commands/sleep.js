const moment = require("moment");
const config= require("../botConfig.js")
module.exports.run = (bot, message, [interval, period]) => {
    if(!config.ownerDev.includes(message.author.id)){
        return message.channel.send("This command is locked to the bot owner and the bot developer!");
        } else {
            let commandLog = bot.channels.get('530923952412033044')
            let command = ("`sleep`")
            let guild = message.guild.name
            commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    const timer = moment.duration(parseInt(interval, 10), period).asMilliseconds();
  console.log(timer);
  message.channel.send(`${bot.user} is going to sleep for ${timer} milliseconds :wave:`)
  bot.destroy();
  setTimeout(()=>{
    process.exit(1);
  }, timer);
};
}
module.exports.help = {
    name: "sleep"
}
