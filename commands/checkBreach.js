const CheckDB = require("snekfetch");
exports.run = async (bot, message, args) => {
   // return message.reply(`Sorry.. this command is currently borked.. and has been disabled by one of the bot devs.`)
    if(!args[0]) return message.reply("Please provide an e-mail address to check");
    await message.delete(300).catch(o_O => {});
    let {body} = await CheckDB.get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[0]}`).set("hibp-api-key", process.env.hibp)
    if(!body || body === null || body === undefined) return message.reply(`Upon checking the database no results were found for \`\`${args[0]}\`\` this is good news! :thumbsup:`)

    let out = ` Unfortunatly breaches have been found for: **${args[0]}**, we suggest you check this and take measures to secure your accounts\n`;
    let po = 0;
    const format = body.forEach(i => {
        po++;
        out += `\n${po}.   ${i.Name}   breached on:   ${i.BreachDate}`
    })
    if(out.length > 2000) return message.reply("Too many results, please check https://haveibeenpwned.com/").catch(o_O => {})
    message.reply(out).catch(o_O => {})
   
};

module.exports.help = {
    name:"cb"
}
//Temp fix
