const Discord = require("discord.js")
module.exports.run = (bot, message, args) => {
    let proof = message.guild.emojis.find(e => e.name === args[1])
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(`You don't have the required permissions to run this command!\nMissing : \`MANAGE_EMOJI\``).then(m => m.delete(15000).catch());
    message.delete().catch()
    if (!args[0]) return message.channel.send('Please Provide a Link!\nExample `g!addemoji linkhere namehere`')
    if (!args[1]) return message.channel.send('Please Provide a Name for the emote.\nExample `g!addemoji linkhere namehere`')
 if(message.guild.emojis.filter(c => c.animated).size === 50){
         return message.channel.send(`This server has 50 animated emojis!`);
         }else
         if(message.guild.emojis.filter(c => !c.animated).size === 50){
         return message.channel.send(`This server has 50 normal emojis!`)
         }
         if(message.guild.emojis.filter(e => e.name.toLowerCase() === args[1].toLowerCase()).size > 0){
            return message.channel.send(`:x: Error\nAn emoji called ${args[1]} already exists!\nProof : ${proof}`)
        }
         message.guild.createEmoji(args[0], args.slice(1).join(" ")).then(e => {
            const sendEmote = new Discord.RichEmbed()
            .setTitle("Success!")
            .setColor("#008000")
            .setDescription(`Your emote had been added and is called ${args[1]}`)
            .setImage(`${e.url}`)
            .setFooter(`Emote added by ${message.author.tag}`)
            .setTimestamp()
         message.channel.send(sendEmote).catch(error => {
             let e = new Discord.RichEmbed()
             .setColor(`#FF0000`)
             .setTitle(`There was an error while running this command.`)
             .setDescription(`
             **Possible Issues**
             1. Make sure that the file size is 128KB or below.
             2. Make sure that it\`s a valid URL you are providing.
             `)
             return message.channel.send(e)
         });
    })
}

module.exports.help = {
    name:"addemoji"
}
