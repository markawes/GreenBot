const ms = require('ms'), locks = new Set(), valid = ["unlock", "lift", "un"];
module.exports.run = async (bot, message, args) => {
  try{
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`No can do.. you don't have \`Manage Server\` permission`)
  if(locks.has(message.channel.id) && !valid.includes(args[0] ? args[0].toLowerCase() : "No")) return message.channel.send(`This channel is already in lockdown!`)
  if(locks.has(message.channel.id) && valid.includes(args[0] ? args[0].toLowerCase() : "No")){
  await locks.delete(message.channel.id);
  message.channel.overwritePermissions(message.guild.id, {SEND_MESSAGES: null})
  return message.channel.send(`Channel: Unlocked`);
  }else{
  await locks.add(message.channel.id);
  message.channel.overwritePermissions(message.guild.id, {SEND_MESSAGES: false});
  return message.channel.send(`Channel: Locked\nUse: "g!lockdown unlock" to unlock the channel!`);
  }
  }catch(error){
  message.channel.send(`Error:\n${error}`);
  bot.error(bot, "Command `lockdown` Error", error.stack)
  }
};

module.exports.help = {
    name: 'lockdown',
};
