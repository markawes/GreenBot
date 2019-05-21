const {RichEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {
    bot.channels.get('530923952412033044').send(`${message.author.tag} has used \`help\` in ${message.guild.name}`)
    let embedMessages = message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS");
    if(!embedMessages) return message.channel.send("I do not have permission EMBED_LINKS");
    let generalcmds = [
        "g!botinfo (Displays information about the bot)",
        "g!bots (Displays how many bots are in the server)",
        "g!cb [email] (Checks if your email address has been compromised against known breaches)",
        "g!cheeve [text] (Display minecraft achievement)",
        "g!mcs [playername] (this shows the skin of a player)",
        "g!dice (Roll the dice)",
        "g!help (View command list)",
        "g!members (Displays how many human members the server has)",
        "g!memberstats (Displays information about members/bots)",
        "g!penguintypes (List Penguin Types)",
        "g!penguin (Displays images of Penguins)",
        "g!penguinvideo (Displays A Video of Penguins)",
        "g!monkeyvideo (Displays A Video of Monkeys)",
        "g!ping (Check the bots connection to Discord)",
        "g!pokemon [name] (Display selected pokemon example g!pokemon pikachu)",
        "g!color (Displays a random color)",
        "g!rps (Play rock paper scissors)",
        "g!shoot [user] (Shoots the mentioned user)",
        "g!smile (Unleash the devil inside you)",
        "g!emoji (Displays all the emoji on the server)",
        "g!uptime (Tells you how long I have been online since last reboot)",
        "g!urban [word] (Search the urban dictionary, example g!urban green)",
        "g!cowsay [text] (this will make a cow say stuff)",
        "g!slots (Do you think you got what it takes to win?)",
        "g!googleit (funny google pic)",
        "g!youtube [search term] (search youtube)",
        "g!gay [user] (Greenbot will predict how gay the tagged user is. if no one is tagged it will predict how gay you are)",
        "g!birthday [user] (to tell them happy birthday)",
        "g!perms (Shows What You Can Do)",
        "g!joined (shows when members joined the server)",
        "g!mss (to show the status of a minecraft server)",
        "For More Help Go Here --> https://greenbot.mwserver.co/"
    ];

    let admincmds = [
        "g!clip (Mass delete messsges)",
        "g!lockdown (Lock a channel for a specific duration)",
        "g!softban Softban will ban and immediatly unban a user whilst deleting any message they wrote in the past 7 days"
    ]

    let ownercmds = [
        "g!botlink (Send invite link to let users invite GreenBot to their server)",
        "g!restart (Restart the bot)",
        "g!tweet [message] (Send a tweet via the bot)",
        "g!playing [text] (Sets the bots \"Playing:\" message)",
        "g!setavatar (give greenbot a new look)",
        "g!whereareyou (shows me where my bot is)",
        "g!botcheck (Shows what server has over 50 bots.)"
    ]
    let embed = new RichEmbed()
    .setColor(`#FF000`)
    .setAuthor("GreenBot Command List", bot.user.displayAvatarURL)
    .setTitle(`General Commands`)
    .setDescription(generalcmds.join('\n'))
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Command list requested by ${message.author.username}`)
    if(message.member.hasPermission('MANAGE_GUILD' || "ADMINISTRATOR" || "KICK_MEMBERS" || "BAN_MEMBERS" || "MANAGE_MESSAGES")){
        embed.addField(`Moderator Commands`, admincmds.join('\n'))
        embed.addBlankField()
    }
    if(bot.odevs.includes(message.author.id)){
        embed.addField(`Bot Developer Commands`, ownercmds.join('\n'))
    }
    message.channel.send(embed);
}

module.exports.help = {
    name: "testhelp"
}
