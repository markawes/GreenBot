//const talkedRecently = new Set();
const botConfig = require("../botConfig.js");
const Discord = module.require("discord.js");

//const moment = require("moment")
module.exports.run = async (bot, message, args) => { 
   
      if(message.author.id !== botConfig.ownerDev) return message.react("393617452992430080");
      //message.delete();
const arg = message.content.split(" ").slice(1);
const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
          try {
            const code = arg.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            
          }
        };	

module.exports.help = {
    name: "eval"
}

// DO NOT FUCK ABOUT WITH THIS COMMAND IT IS VERY DANGEROUS IN THE WRONG HANDS
//COMMAND IS RESTRICTED TO THE BOT DEVELOPER ONLY IF YOU DON'T KNOW WHY THEN GET THE FUCK OUT OF THIS FILE
