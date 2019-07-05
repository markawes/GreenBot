const Discord = require("discord.js")
const botSettings = require("../botConfig.js")
var Twit = require('twit')

var T = new Twit({
    consumer_key: process.env.consumerkey,
    consumer_secret: process.env.consumersecret,
    access_token: process.env.accesstoken,
    access_token_secret: process.env.accesstokensecret,
    timeout_ms: 60 * 1000,
})

module.exports.run = (bot, message, args) => {
    if(!botSettings.greenOwner.includes(message.author.id)){
        return message.reply("This command is locked to the bot owner!"); //lock command to Green only.
        }
    let contents = args.slice(0).join(" ")
    if ((contents).length > 140) {
        return message.reply("Your Tweet was more than 140 characters could not be sent :frowning:.");
    }
    T.post('statuses/update', { status: contents }, function(err, data, response) {
       
        message.channel.send("Your Tweet was sent succesfully: https://twitter.com/" + data.user.screen_name + "/status/" + data.id_str + "")
    })
}

module.exports.help = {
    name: "tweet"
}

//keep all keys secret
//give them to no one
//if you find out twitter char limit you can change it on line 18 "140"
