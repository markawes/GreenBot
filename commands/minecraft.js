const Discord = require('discord.js');
const superagent = require('superagent');
const config = require('../config.js');
module.exports.run = async (bot,message) => {

    let {body} = await superagent.get(`https://api.tenor.com/v1/random?q=minecraft&key=${config.tenorAPI}`)

    let minecraft = new Discord.RichEmbed()
    .setColor("#009900")
    //.setTitle("")
    .setImage(body.results[Math.floor(Math.random() * body.results.length)].media[0].tinygif.url)
    .setFooter(`Loaded for ${message.author.username}`)
    .setTimestamp()

    message.channel.send(minecraft);

}

module.exports.help = {
    name: "minecraft"
}
