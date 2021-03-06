const CheckDB = require("snekfetch");
exports.run = async (bot, message, args) => {
   try{
    if(!args[0]) return message.reply("Please provide an e-mail address to check");
    await message.delete(300).catch(o_O => {});
    let {body} = await CheckDB.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${args[0]}?truncateResponse=false`).set("hibp-api-key", process.env.hibpapikey)
    let out = ` Unfortunatly breaches have been found for: **${args[0]}**, we suggest you check this and take measures to secure your accounts\n`;
    let po = 0;
    const format = body.forEach(i => {po++;out += `\n**${po}.** \`${i.Name}\` breached on: **${i.BreachDate}**`})
    message.channel.send(out, {split: true}).catch(o_O => {})
   }catch(e){
return message.reply(`Upon checking the database no results were found for \`\`${args[0]}\`\` this is good news! :thumbsup:`)
   }
};

module.exports.help = {
    name:"cb"
}
//Command should work now
