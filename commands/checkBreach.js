const CheckDB = require("snekfetch");
exports.run = async (bot, message, args) => {
	let commandLog = bot.channels.get('530923952412033044')
    let command = ("`cb`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    if(!args[0]) return message.reply("Please provide an e-mail address to check");
    await message.delete(300);
    let {
        body
    } = await CheckDB
        .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[0]}`)
        .catch(err => {
            message.reply(`Upon checking the database no results were found for \`\`${args[0]}\`\` this is good news! :thumbsup:`)
        });

    let out = ` Unfortunatly breaches have been found for: **${args[0]}**, we suggest you check this and take measures to secure your accounts\n`;
    let po = 0;
    const format = body.forEach(i => {
        po++;
        out += `\n${po}.   ${i.Name}   breached on:   ${i.BreachDate}`
    })
    if(out.length > 2000) return message.reply("Too many results, please check https://haveibeenpwned.com/")
    message.reply(out);
   
};

module.exports.help = {
    name:"cb"
}