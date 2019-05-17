const Discord = require("discord.js")
let users = ['188861825100677120', '272442568275525634']; // Users who can do the "g!botcheck" command 
module.exports.run = async (bot, message, args) => {
      if(!users.includes(message.author.id)) return message.react("❌")
      if(!args[0]) return message.channel.send(`And... the server id is?.. or do I have to read you mind..`);
      if(isNaN(args[0])) return message.channel.send(`Come on mate.. give me a valid server id..`);
      let guild = await bot.guilds.get(args[0])
      if(!guild) return message.channel.send(`Well.. uh, what is the valid server id?..`);
      let msg = await message.channel.send(`Trying to leave.. ${guild.name}, one moment please..`);
      try{
      await guild.leave().then(async () => {
      return msg.edit(`Successfully left.. ${guild.name}`);
      })
}catch(e){
return msg.edit(`Error while trying to leave: ${args[0]}:\n${e}`)
}
}

module.exports.help = {
    name: "leave"
}
