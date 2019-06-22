const Discord = require('discord.js');

module.exports.run = async (bot, msg) => {
  const duelhelp = new Discord.RichEmbed()
    .setTitle('Duel Usage')
    .setAuthor(`${bot.user.username}`)
    .setColor(0x009900)
    .addField('About', 'Fight with another user!', false)
    .addField('Usage', 'g!duel <user mention>', false)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp();
  const user1 = msg.author;
  const user2 = msg.mentions.users.first();
  if (!user2) {
    return msg.channel.send({
      embed: duelhelp,
    });
  }

  if (user1 == user2) return msg.reply('You can\'t duel yourself!');
  const users = [];
  await users.push(user1);
  await users.push(user2);
  const winner = users[Math.floor(Math.random() * users.length)];
  const message = msg.channel.send(`:crossed_swords: ${user1} is dueling :crossed_swords:  ${user2}!`);
  await msg.channel.send (`:crossed_swords:  ${winner} has won the duel! :crossed_swords: `)
   //msg.edit(`${winner} has won!`);
};

module.exports.help = {
    name: "duel"
}
