const Discord = require("discord.js")
let users = ['188861825100677120', '272442568275525634', '288450828837322764'];
module.exports.run = async (bot, message) => {
      if(!users.includes(message.author.id)) return message.react("❌")
      let servers = [];
        await bot.guilds.filter(s => s.members.filter(m => m.user.bot).size >= 50).map(c => servers.push(`**Server: **${c.name} (${c.id})\n**Bot Count: **${c.members.filter(m => m.user.bot).size}\n**Human Count: **${c.members.filter(m => !m.user.bot).size}`))
        let e = new Discord.RichEmbed()
        .setColor("#008000")
        if(servers.length !== 0){
        e.setTitle(`Servers: [${servers.length}]`)
        .setDescription(servers.join('\n\n'))
        return message.channel.send(e)
        }else{
        e.setTitle(`Servers: [0]`)
        .setDescription(`No servers have over 50 bots.`)
        return message.channel.send(e)
        }
}

module.exports.help = {
    name:"botcheck"
}
