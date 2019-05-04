const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  let commandLog = bot.channels.get('530923952412033044')
  let command = ("`perms`")
  let guild = message.guild.name
  commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)

  let pUser = message.mentions.members.first() || message.guild.members.get(args[0]) || message.mentions.users.first() || message.member;
    let fields = [];
if(!pUser) return message.reply("Check whos permissions?")
let permissions = pUser.permissions.serialize();
for (let permission in permissions) {
  fields.push({
    name: permission.replace(/_/g, ' ').toUpperCase(),
    value: permissions[permission],
    inline: true
  });

  if (args[0] = null) message.channel.send("Specify a user!")  
}
message.channel.send({
  embed: {
    color: 12812876,
    title: `${message.author.username} has requested a permission check for :arrow_lower_left:`,
    description: `[${pUser}] and that user has the following permissions in this channel and server.`,
    fields: fields

    
  }
}).catch(e => {
   console.log(e)
});


}
module.exports.help = {
    name: "perms"
}