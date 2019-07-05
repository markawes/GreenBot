module.exports.run = async (bot, message, args) => {
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
