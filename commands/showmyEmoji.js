const {RichEmbed} = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (message.guild.emojis.size === 0) return message.channel.send({embed: {title: `***Sad ${bot.user.username} noise***`, description: "This server has no custom emoji :frowning:", author: {name: `${message.guild.name}`, icon_url: message.guild.iconURL}}});
      let normal = [], gif = [];
        await message.guild.emojis.forEach(c => {c.animated ? gif.push(c) : normal.push(c)});
        let e = new RichEmbed()
        .setColor(message.member.displayColor)
        .setAuthor(`Here is a list of all custom emoji here at **${message.guild.name}**`, message.guild.iconURL)
        .setTimestamp()
        if(normal.join(' ').length >= 1030){
            e.addField(`**__Normal Emojis__**`, normal.slice(0, 25).join(' '))
            if(normal.slice(25, 50).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(25, 50).join(' '))
            if(normal.slice(50, 75).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(50, 75).join(" "))
            if(normal.slice(75, 100).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(75, 100).join(" "))
            if(normal.slice(100, 125).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(100, 125).join(" "))
            if(normal.slice(125, 150).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(125, 150).join(" "))
            if(normal.slice(150, 175).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(150, 175).join(" "))
            if(normal.slice(175, 200).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(175, 200).join(" "))
            if(normal.slice(200, 225).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(200, 225).join(" "))
            if(normal.slice(225, 250).join(" ").length !== 0) e.addField(`\u200b`, normal.slice(225, 250).join(" "))
        }else{
            e.addField(`**__Normal Emojis__**`, normal.join(' '))
        }
        if(gif.join(' ').length >= 1030){
            e.addField(`**__Animated Emojis__**`, gif.slice(0, 25).join(' '))
            if(gif.slice(25, 50).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(25, 50).join(' '))
            if(gif.slice(50, 75).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(50, 75).join(" "))
            if(gif.slice(75, 100).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(75, 100).join(" "))
            if(gif.slice(100, 125).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(100, 125).join(" "))
            if(gif.slice(125, 150).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(125, 150).join(" "))
            if(gif.slice(150, 175).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(150, 175).join(" "))
            if(gif.slice(175, 200).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(175, 200).join(" "))
            if(gif.slice(200, 225).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(200, 225).join(" "))
            if(gif.slice(225, 250).join(" ").length !== 0) e.addField(`\u200b`, gif.slice(225, 250).join(" "))
        }else{
            e.addField(`**__Animated Emojis__**`, gif.join(' '))
        }
        return message.channel.send(e)
}

module.exports.help = {
    name: "emoji"
}

//commands for use by GreensBot only - written my Mark (Booped By: SUPERCHIEFYT)
