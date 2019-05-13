const config = require ("../botConfig.js")
const fetch = require("snekfetch")
module.exports.run = async (bot, message) => {
   if(!config.ownerDev.includes(message.author.id)){
        return;
        } else {
    let {body} = await new fetch("GET", `https://discordbots.org/api/bots/432267856869064704/votes`).set("Authorization", process.env.dblkey);
            let e = new Discord.RichEmbed()
            .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
            .setColor("0x009900");
            if(body){
            let data = [];
            body.forEach(async m => {
            if(data.includes(`<@${m.id}> \`@${m.username}#${m.discriminator}\` (${m.id})`)){
                  return;
            }else{
                  data.push(`<@${m.id}> \`@${m.username}#${m.discriminator}\` (${m.id})`)
            }
            });
            const msgs = [];
            if (data.length >= 2000) {
                        const splitContent = splitMessage(data);
    
                        for (const part in splitContent) {
                            let embed = new Discord.RichEmbed()
                                .setDescription(splitContent[part])
                                .setColor("RANDOM")
                                .setTitle(`Votes`)
                            msgs.push(await message.channel.send(embed));
                        }
                  }else{
                        e.setDescription(data.join('\n'))
                        .setTitle(`Votes`)
            msgs.push(await message.channel.send(e));
                  }
      }else{
            e.setDescription(`No one has voted.`)
            .setTitle(`ERROR`)
            .setColor(`#FF0000`)
            return message.channel.send(e)
      }
  }
}
module.exports.help ={
    name:"checkvote"
}
