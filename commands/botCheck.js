const Discord = require("discord.js")
let ignore = ["264445053596991498"]; // Ignore servers like DBL.. 
const {post} = require("superagent");
module.exports.run = async (bot, message) => {
      if(!bot.odevs.includes(message.author.id)) return message.react("❌")
      let servers = [];
        await bot.guilds.filter(s => Math.round(((s.members.filter(c => c.user.bot).size / s.memberCount) * 100).toFixed(2)) >= "90" && !ignore.includes(s.id)).map(c => servers.push(`**Server: **${c.name} (${c.id})\n**Percent: **${Math.round(((c.members.filter(c => c.user.bot).size / c.memberCount) * 100).toFixed(2))}%\n**Bot Count: **${c.members.filter(m => m.user.bot).size}\n**Human Count: **${c.members.filter(m => !m.user.bot).size}`))
        let e = new Discord.RichEmbed()
        .setColor("#008000")
        if(servers.length !== 0){
        if(servers.join(" ").length >= 2040){
        let {body} = await post(`https://sourceb.in/api/bin`).send(`${servers.join("\n\n")}`); 
        let link = `https://sourceb.in/${body.key}.txt`
        e.setTitle(`Servers: [${servers.length}]`)
        .setDescription(link)
        return message.channel.send(e)
        }else{
        e.setTitle(`Servers: [${servers.length}]`)
        .setDescription(servers.join("\n\n"))
        return message.channel.send(e)
        }
        }else{
        e.setTitle(`Servers: [0]`)
        .setDescription(`No servers have 90% more bots than humans`)
        return message.channel.send(e)
        }
}

module.exports.help = {
    name:"botcheck"
}
