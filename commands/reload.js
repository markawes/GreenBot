module.exports.run = (bot, message, args) => {
    if (message.author.id !== '188861825100677120') {
        return message.reply(`This is not for you ${message.author.username} so fuck off!`);
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  };
}
  module.exports.help = {
      name: "reload"
  }