module.exports.run = async (bot, message, args) => {
	let commandLog = bot.channels.get('530923952412033044')
    let command = ("`xmas`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    const talkedRecently = new Set();
    if(talkedRecently.has(message.author.id)) {
        return message.channel.send("**STOP IT!!!** : I can only do one Xmas message at a time, I'm not a fucking robot");
        } else {

    let christmasMessage = await message.channel.send('Give me time to complete the last Xmas Message you jerk!');
    christmasMessage.edit(`GreenBot`);
    christmasMessage.edit(`GreenBot wishes`);
    christmasMessage.edit(`GreenBot wishes you`);
    christmasMessage.edit(`GreenBot wishes you a `);
    christmasMessage.edit(`GreenBot wishes you a Merry`);
    christmasMessage.edit(`GreenBot wishes you a Merry Christmas`);
    christmasMessage.edit(`GreenBot wishes you a Merry Christmas and `);
    christmasMessage.edit(`GreenBot wishes you a Merry Christmas and a`);
    christmasMessage.edit(`GreenBot wishes you a Merry Christmas and a Happy`);
    christmasMessage.edit(`GreenBot wishes you a Merry Christmas and a Happy New`);
    christmasMessage.edit(`GreenBot wises you a Merry Chrsitmas and a Happy New Year`);
    christmasMessage.edit(`:christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: `);
    christmasMessage.edit(`:evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree:  `);
    christmasMessage.edit(`:christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: `);
    christmasMessage.edit(`:evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree: :evergreen_tree: :christmas_tree: `);
    christmasMessage.edit(`and a Happy New Year!!`);
    message.channel.send(christmasMessage);
    talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id); // Removes the user from the set after a minute
        }, 15000);
    }
 }

 module.exports.help = {
    name: "xmas"
  }