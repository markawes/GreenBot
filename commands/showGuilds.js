const Discord = require("discord.js")
const config= require("../botConfig.json")
module.exports.run = (client, message, args) => {
  let commandLog = client.channels.get('530923952412033044')
  let command = ("`whereareyou`")
  let guild = message.guild.name
  commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
  const commandOwner = client.users.get('272442568275525634')
  //if(message.guild.id !== "389472576235372565") return message.reply("This is not where the Master Sword lies!")
      if(!config.ownerDev.includes(message.author.id)){
        return message.channel.send("It is none of your business where I am!");
      }
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id} : ${guild.owner}`
    })
  
    //create the embed
    
    const servers = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} stats | Guild Name | Guild ID | Guild Owner`)
    .setTitle("I am currently in the following servers")
    .setDescription(`${guildArray.join("\n")}\n\n----EOL----`)
    .setFooter(`Guild Info created by ${commandOwner.tag}`)
    .setColor(0x008000)
    //.setTimeStamp()    
    // And send it
    message.channel.send(servers)
    //message.channel.send(`I am curently in the following guilds\n\n${guildArray.join("\n")}\n\n----EOL----`)
  }

module.exports.help = {
    name: "whereareyou"
}