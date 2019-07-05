module.exports.run = async (bot, message, args) => {
    try {
        if (!args[0]) return message.channel.send("Please tell everyone why you are going AFK")
        if(message.member.displayName.startsWith("[AFK]")){
          message.reply("You're already AFK.")
        }
        else {
          await message.member.setNickname(`[AFK]${message.author.username}`);
          message.reply("**You are now AFK.**\nPlease do `g!bk` when you get back!")
        }  
      }catch(err) {
        message.channel.send("I am unable to set you as AFK, sorry chief!")
      }
}

 module.exports.help = {
     name:"afk"
 }
