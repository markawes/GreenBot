const Discord = require("discord.js")
const urban = require("relevant-urban")

module.exports.run = async (bot, message, args) => {
   if(!message.channel.nsfw) return message.channel.send("Sorry, this command can only be ran in `NSFW`channels")
  let commandLog = bot.channels.get('530923952412033044')
  let command = ("`urban`")
  let guild = message.guild.name
  commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    if (!args[0]) return message.channel.send("What urban term do you want?");

    let res = await urban(args.join(' ')).catch(e => {
    
       
    }) 
      if(!res) return message.channel.send(`Sorry ${message.author.username} I could not find anything for *[${args}]*. :slight_frown:`); 
    const embed = new Discord.RichEmbed()
    .setTitle(res.word)
    .setDescription(res.definition || "No definition could be found")
    .addField("Example", res.example.slice(0, 1024))
    .addField("Link", res.urbanURL)
    .setColor(0x008000) //could be green, could be yellow - i cant remember
    .addField("Upvotes :thumbsup:", res.thumbsUp, true)
    .addField("Upvotes :thumbsdown:", res.thumbsDown, true)
    .setFooter(`Written by ${res.author}`)

     message.channel.send(embed)

    
}
 
 module.exports.help = {
    name: "urban",
}
