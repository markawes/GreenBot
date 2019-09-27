const {RichEmbed} = require("discord.js"), {get} = require('snekfetch');
module.exports.run = async (bot, message, args) => {
   let {body} = await get(`https://elara-api.glitch.me/penguins`);
   if(!body) return message.channel.send({embed: {title: "Something went wrong trying to fetch a penguin photo, please try again.", color: 0xFF0000}})
   if(body.status !== "Success") return message.channel.send({embed: {title: "Something went wrong trying to fetch a penguin photo, please try again.", color: 0xFF0000}})
   let embed = new RichEmbed()
   .setTitle("Here is a penguin")
   .setDescription(`All yours ${message.author.username}`)
   .setImage(body.image)
   .setColor(12812876)
   .setTimestamp()
   .setFooter(`Requested by ${message.author.username}`);
   message.channel.send(embed);
}

module.exports.help = {
    name: "penguin"
}
