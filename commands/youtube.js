const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("ERROR, unable to perform the search at this time, please try again later.")
        let embed = new Discord.RichEmbed()

        .setColor("0xff0000")
        .setTimestamp()
        .addField('Action:', 'Searching on YouTube')
        .addField("Searching For:", `${args.slice(0).join(' ')}`)
        .addField('Link:', `${link}`)
        .setThumbnail("https://i.imgur.com/h5uWmkd.png")
        //.setFooter(`Search results for ${message.author}`);
          
              message.channel.send(embed);
            //  message.author.send(`You have searched for ${link}`);
    }
module.exports.help = {
    name: "youtube"
}
