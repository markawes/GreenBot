
const botSettings = require("../botConfig.json");
const Discord = module.require("discord.js");
//const moment = require("moment")


module.exports.run = async (bot, message, args) => { 
   
   if(!botSettings.ownerDev.includes(message.author.id)){
        return message.channel.send("This command is locked to the bot owner and the bot developer!");
        } else {

            message.channel.send('Are you sure you want to reboot me?\n\nReply with \`cancel\` to **abort** the reboot. The reboot will self-abort in 30 seconds.');
            return message.channel.awaitMessages(m => m.author.id === message.author.id, {
              'errors': ['time'],
              'max': 1,
              time: 30000
            }).then(resp => {
              if (!resp) return;
              resp = resp.array()[0];
              let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
              if (validAnswers.includes(resp.content)) {
                if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
                  return message.channel.send('**Aborting** reboot.');
                } else if (resp.content === 'yes' || resp.content === 'y') {
                 // return message.channel.send('**Rebooting...**, I should be back within 10 seconds');
                  bot.destroy().then(() => {
                    process.exit(8592);
                  }).catch(console.error);
                }
              } else {
                message.channel.send(`Only \`${validAnswers.join('`, `')}\` are valid, please supply one of those.`).catch(()=>console.error);
              }
            }).catch(() => {
              console.error;
              message.channel.send('Reboot timed out.');
            });
          }
        }
          

//     await message.channel.send(':wave: GreenBot will be back shortly!')
//     console.log(`[[Restart requested by`, `${message.author.username}]]`)
//     message.channel.send("I'm Back!")
//         process.exit(8592);
// 	}
// };   

module.exports.help = {
    name: "restart"
}