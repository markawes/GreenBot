const Discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You didn't say the magic word.");
let data = [null], name = [null], num = 0;
await message.guild.members.sort((a, b) => b.joinedAt - a.joinedAt).forEach((m, i)=> {
if(m.user.bot === false){
num++;
name.push(`${num}`);
data.push(`${m.user.tag} (${m.user.id}): ${moment(m.joinedAt).format('dddd, MMMM Do YYYY')}`);
}
});
 const cake2 = new Discord.RichEmbed()
 .setAuthor("Members by join date", bot.user.displayAvatarURL)
 .setColor(0x0a8000)
 .setTimestamp();
 let i = 0;
 await data.slice(1, 26).reverse().forEach(c => {
     i++;
     cake2.addField(`${name[i]}`, c);
});
if(data.length > 25) cake2.setFooter('This only shows up to 25 members join dates!');
message.channel.send(cake2);
};

module.exports.help = {
   name: "joined"
};
