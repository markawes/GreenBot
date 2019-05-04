function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.run = async (client, msg) => {
  const slotOptions = ['🍐', '🌮', '🍇', '🍎', '🍅', '🍓', '🍉', '🍋', '🍪'];

  const slot1 = slotOptions[randomInt(0, 8)];
  JSON.stringify(slot1);

  const slot2 = slotOptions[randomInt(0, 8)];
  JSON.stringify(slot2);

  const slot3 = slotOptions[randomInt(0, 8)];
  JSON.stringify(slot3);
  const slotMessage = await msg.channel.send(`**${msg.author.username}** rolled the slots!`);
  slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n | |`);
  slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n${slot1}| |`);
  slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n${slot1} | ${slot2} |`);
  slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n${slot1} | ${slot2} | ${slot3}`);
  if (slot1 == slot2 && slot1 == slot3 && slot2 == slot3) {
    slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n${slot1} | ${slot2} | ${slot3}\n\nYou won!`);
  } else {
    slotMessage.edit(`**${msg.author.username}** rolled the slots!\n\n${slot1} | ${slot2} | ${slot3}\n\nYou lost!\nBetter luck next time.`);
  }
};

module.exports.help = {
    name: "slots"
}