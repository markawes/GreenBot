const Discord = require("discord.js")
const moment = require("moment");
const superagent = require('snekfetch');
module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
    .get(`https://animals.anidiots.guide/penguin`);
    //var penguin = penguins[Math.floor(Math.random() * penguins.length)]
    var pengname = name[Math.floor(Math.random() * name.length)]
 //var pengdes = description[Math.floor(Math.random() * description.length)]
   let embed = new Discord.RichEmbed()
   .setTitle("Here is one of my people")
   .setDescription(`This is ${pengname}`)
   .setImage(body.link)
   .setColor(12812876)
   .setFooter(`Requested by ${message.author.username} | ${moment(new Date).format('DD/MM/YYYY [at] hh:mm:ss a')}`);

   message.channel.send({embed});
}

module.exports.help = {
    name: "penguin"
}
