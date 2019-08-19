//const talkedRecently = new Set();
const botConfig = require("../botConfig.js");
const Discord = module.require("discord.js");

//const moment = require("moment")
module.exports.run = async (bot, message, args) => { 
   if(!bot.odevs.includes(message.author.id)) return message.react("393617452992430080");
   const clean = text => {
      if(typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
  }
          try {
            const code = args.join(" ");
            let evaled = eval(`(async () => {${args.join(" ")}})()`);
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            evaled.replace(new RegExp(botConfig.token, "g"), "-- Discord Bot Token --").replace(new RegExp(bot.token, "g"), "-- Discord Bot Token --").replace(new RegExp(process.env.token, "g"), "-- Discord Bot Token --").replace(new RegExp(process.env.dblkey, "g"), "-- DBL KEY --")
            message.channel.send({embed: {description: `\`\`\`js\n${clean(evaled)}\`\`\``, title: "Result", color: 0x008000, timestamp: new Date()}});
          } catch (err) {
            if(message.channel.permissionsFor(message.guild.me).has(["READ_MESSAGES", "SEND_MESSAGES", "EMBED_LINKS"])){
           message.channel.send({embed: {description: `\`\`\`js\n${clean(err.stack)}\`\`\``, title: "Result - Error", color: 0xFF0000, timestamp: new Date()}});
            }else{
               message.author.send(`YOO! I don't have any permissions to talk in ${message.channel} *Sad GreenBot noise*`).catch(o_O => {})
            }
          }
        };	

module.exports.help = {
    name: "eval"
}

// DO NOT FUCK ABOUT WITH THIS COMMAND IT IS VERY DANGEROUS IN THE WRONG HANDS
//COMMAND IS RESTRICTED TO THE BOT DEVELOPER ONLY IF YOU DON'T KNOW WHY THEN GET THE FUCK OUT OF THIS FILE
