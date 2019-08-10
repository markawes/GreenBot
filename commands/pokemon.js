const Discord = require("discord.js")
const pokemonGif = require('pokemon-gif');

module.exports.run = (bot, message, args) => {
try{
        let poke = await pokemonGif(args.join(' ') || Math.floor(Math.random() * 721) + 1)
        let embed = new Discord.RichEmbed()
        .setImage(poke)
        .setTitle(`Image doesn't load? click here`)
        .setURL(poke)
        .setColor(0xFF0000)
        .setDescription(`Here is your **${args.join(' ') || "Random"}** pokemon`)
        message.channel.send(embed)
        }catch(err){
            return message.channel.send({embed: {title: `No pokemon found`, color: 0xFF0000}})
 }
}
module.exports.help = {
    name: "pokemon"
}
