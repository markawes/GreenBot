const Discord = require("discord.js")
const cows = require('cows');
const rn = require('random-number');
module.exports.run = async (bot, message, args) => {

    var options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    }
    let random = rn(options);
    message.channel.send(cows()[random], {code: ""})
}

 
 module.exports.help = {
    name: "cow",
}
