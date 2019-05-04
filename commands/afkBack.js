module.exports.run = async (bot, message, args) => {
  let commandLog = bot.channels.get('530923952412033044')
  let command = ("`bk` (no longer afk)")
  let guild = message.guild.name
  commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
   if(!message.member.displayName.startsWith("[AFK]")){
     message.reply("You are not set AFK.")
   }
   else {
     message.reply("**You are no longer AFK.**")
      message.member.setNickname(`${message.author.username}`);
   }  
 }

 module.exports.help = {
     name:"bk"
 }