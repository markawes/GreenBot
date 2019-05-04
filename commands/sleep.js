const moment = require("moment");
const config= require("../botConfig.json")
module.exports.run = (bot, message, [interval, period]) => {
    if(!config.ownerDev.includes(message.author.id)){
        return message.channel.send("This command is locked to the bot owner and the bot developer!");
        } else {
    const timer = moment.duration(parseInt(interval, 10), period).asMilliseconds();
  console.log(timer);
  message.channel.send(`${message.guild.name} is going to sleep for ${timer} milliseconds :wave:`)
  bot.destroy();
  setTimeout(()=>{
    process.exit(1);
  }, timer);
};
}
module.exports.help = {
    name: "sleep"
}