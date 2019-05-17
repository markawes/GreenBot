const Discord = require('discord.js'),
      fs = require('fs'),
      bot = new Discord.Client({disableEveryone: true}),
      botConfig = require('./botConfig.js'),
      prefix = botConfig.prefix,
      sexy = require('chalk'),
      banished = require('./classes/noGreenBot4u.json');
bot.odevs = botConfig.ownerDev
bot.commands = new Discord.Collection(); //for commands
bot.ratelimits = new Discord.Collection(); // create collection of rate limit
bot.log = async function(bot, message, command){
    try{
        let e = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle(`Command used: ${command}`)
        .setFooter(`Server: ${message.guild.name} (${message.guild.id})`, message.guild.iconURL)
        .setTimestamp()
        bot.channels.get('530923952412033044').send(e)
    }catch(e){console.log(`Command Log ERROR: ${e.stack}`)}
};
bot.error = async function(bot, title, error){
    console.log(`[${title}] - ${error}`)
    let e = new Discord.RichEmbed()
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
    .setTitle(title)
    .setDescription(error)
   try{bot.channels.get('567115961379979269').send(e)}catch(e){}
}
bot.owner = "188861825100677120";
fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);
 
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log(sexy.red("No commands to load!"));
        return;
    }
 
    console.log(sexy.white.bgBlue.bold(`Loading ${jsfiles.length} commands!`));
 
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        //console.log(`${i + 1}: ${f} loaded!`); //<--- remove the // at the BEGINNING to show command names in log
        bot.commands.set(props.help.name, props);
    });
});
 
bot.on('ready', () => {
  //console.log(sexy.white.bgGreen.bold(`Greensanoob is online! and logged in as ${bot.user.username}`)); //if this ever shows anything else but GreenBot then shut it down and tell me
  console.log(sexy.white.bgGreen.bold(`
  Bot Account: ${bot.user.tag}
  Bot ID: ${bot.user.id}
  Server Count: ${bot.guilds.size}
  Emoji Count: ${bot.emojis.size}
  Channel Count: ${bot.channels.size}
  User Count: ${bot.users.size}
  I am ready!
  `));
    bot.user.setPresence({
        status: "online",
        game: {
        name: "g!help | For Help Join GreenBots Support Server https://discord.gg/YGMcEQ3 | Sub To GreenBots Youtube Channel !Greenbotyt",
        type: "STREAMING",
        url: "https://www.twitch.tv/greensapenguin"
        }
        })
});
//sid = 389472576235372565
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dblkey, bot);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
bot.on("guildCreate", async guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
     //BEGIN NEW GUILD ADD
     let serverSize = guild.memberCount;
     let botCount = guild.members.filter(m => m.user.bot).size;
     let humanCount = serverSize - botCount;
     let verifLevels = ["None", "Low\nmust have verified\nemail on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
   
    const newserverembed = new Discord.RichEmbed()
         .setColor(`0x008000`)
         .setAuthor(`Owner: ${guild.owner.user.tag}`, guild.owner.user.displayAvatarURL)
         .setFooter(`Guild Name: ${guild.name} ID: ${guild.id}`, guild.iconURL)
         .setThumbnail(guild.iconURL ? guild.iconURL : guild.owner.user.displayAvatarURL)
         .setTimestamp()
         .setTitle(`Server Joined`)
         .addField(`Server Name`, guild.name, true)
         .addField(`Server ID`, guild.id, true)
         .addField(`Server Owner`, guild.owner.user.tag, true)
         .addField(`Server Owner ID`, guild.ownerID, true)
         .addField(`Server Region`, guild.region, true)
         .addField(`Verification Level`, verifLevels[guild.verificationLevel], true)
         .addField(`Total Members`, serverSize, true)
         .addField(`Total Bots`, botCount, true)
         .addField(`Total Humans`, humanCount, true)
         .addField(`Emoji Count`, guild.emojis.size, true)
         .addField(`Role Count`, guild.roles.size, true)
         .addField(`Channel Count`, guild.channels.size, true)
         .addField(`Large?`, guild.large ? "Yes" : "No", true)
         .addField(`Server Created At`, guild.createdAt)
     bot.channels.get('526573436818948107').send(newserverembed);
     //END NEW GUILD ADD
 
    //  bot.channels.get("430436180723499010").send(`New guild joined: ${guild.name} \nGuild ID: (id: ${guild.id}). \nMembers in Guild ${guild.memberCount})\n Guild Owner: ${guild.owner}`);
    //start the banishment code
    if(banished.includes(guild.id)) {
        try{
            let banishedReason = guild.channels.filter(c => c.type === "text" && c.permissionsFor(guild.me).has("SEND_MESSAGES")).first()
            banishedReason.send(`:x: | This guild has been blacklisted, ${bot.user.username} is not allowed to be here which is a shame because I think we could of been friends, anyway :wave:`)    
        }catch(e){
        console.log(`I couldn't find a channel to send the message in`)
        }
           setTimeout(async () => {
         await guild.leave().catch(err => console.log(err))
        }, 5000)
    }
    //end the baishment code
   
});
bot.on("guildDelete", guild => {
    console.log(`Left guild ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members!`);
    //bot.channels.get("430436180723499010").send(`Left guild ${guild.name} \nGuild ID: (id: ${guild.id}). \nGuild had: ${guild.memberCount} members!\nGuild Owner: ${guild.owner}`);
         //BEGIN NEW GUILD ADD
         let serverSize = guild.memberCount;
         let botCount = guild.members.filter(m => m.user.bot).size;
         let humanCount = serverSize - botCount;
         let verifLevels = ["None", "Low\nmust have verified\nemail on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
       
         const serverleftembed = new Discord.RichEmbed()
             .setColor(`0xff0000`)
             .setAuthor(`Owner: ${guild.owner.user.tag}`, guild.owner.user.displayAvatarURL)
             .setFooter(`Guild Name: ${guild.name} ID: ${guild.id}`, guild.iconURL)
             .setThumbnail(guild.iconURL ? guild.iconURL : guild.owner.user.displayAvatarURL)
             .setTimestamp()
             .setTitle(`Server Left`)
             .addField(`Server Name`, guild.name, true)
             .addField(`Server ID`, guild.id, true)
             .addField(`Server Owner`, guild.owner.user.tag, true)
             .addField(`Server Owner ID`, guild.ownerID, true)
             .addField(`Server Region`, guild.region, true)
             .addField(`Verification Level`, verifLevels[guild.verificationLevel], true)
             .addField(`Total Members`, serverSize, true)
             .addField(`Total Bots`, botCount, true)
             .addField(`Total Humans`, humanCount, true)
             .addField(`Emoji Count`, guild.emojis.size, true)
             .addField(`Role Count`, guild.roles.size, true)
             .addField(`Channel Count`, guild.channels.size, true)
             .addField(`Large?`, guild.large ? "Yes" : "No", true)
             .addField(`Server Created At`, guild.createdAt)
         bot.channels.get('526573436818948107').send(serverleftembed);
         //END NEW GUILD ADD
});
bot.on('guildMemberAdd', member => {
    if(member.guild.id == '389472576235372565'){ // Greens Server
    member.guild.channels.get('430206024243478528').setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
    member.guild.channels.get('430206266208419851').setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
   member.guild.channels.get('430206301537304576').setName(`Bots + Members : ${member.guild.members.size}`)
   }else
   if(member.guild.id == '389472576235372565') { // Marks Server
   member.guild.channels.get('430206024243478528').setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
   member.guild.channels.get('430206266208419851').setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
   member.guild.channels.get('430206301537304576').setName(`Bots + Members : ${member.guild.members.size}`)
}  
});
 
// Create an event listener for messages
bot.on('message', async message => {
    if(message.author.bot || !message.guild || message.webhookID) return; //stops GreenBot from spamming the prefix when he sees the word "prefix"
    if(message.guild){
     if(message.member.nickname !== null){ 
    if(message.member.nickname.startsWith("[AFK]")) {
message.reply("Do `g!bk` to turn off AFK mode!").then(m => m.delete(5000))
}
}
}
    //users who have the role set below will have their messages deleted
    const msgBanned = bot.guilds.get("389472576235372565").roles.find(c => c.name.toLowerCase() ===  "mute"); //only works on Greens main server
    if (message.member.roles.has(msgBanned.id)) {
    message.delete()
    message.reply("You have been blocked from sending messages, please DM Green").then(m => m.delete(3000));
    }
    //end delete messages with role set above
   
    //Attachment Block Start
   
    const role = bot.guilds.get("389472576235372565").roles.find(c => c.name == 'Attachment Block')
    if(message.member.roles.has(role.id) && message.attachments.size > 0) {
        message.delete()
    return message.reply("You have been blocked from sending attachments in this server!")
        }
   // Attachment Block End
   switch(message.content.toLowerCase()){
       case "master":
       message.channel.send(`**${bot.users.get(bot.owner).tag} is my Master**`)
       bot.log(bot, message, 'Master')
       break;
       case "g!":
       message.channel.send("So.... you want me to run a command... well tell me which one noob, I'm not physic!");
       break;
       case "g!greenbotyt":
       message.channel.send("https://www.youtube.com/channel/UCzr7PNj3mMUE1uRRcM-tw5g");
        bot.log(bot, message, "g!GreenBotYT");
        break;
        case "penguin":
        message.channel.send('🐧')
        break;
        case "penguins":
        message.channel.send('🐧🐧🐧')
        break;
        case "greenbot":
        message.channel.send(`💚${message.author.username} loves GreenBot 💚`);
        break;
        case "g!noots":
        message.channel.send("http://noots.greensapenguin.com/");
        bot.log(bot, message, "g!noots")
        break;
        case "g!pingu":
        bot.log(bot, message, "g!pingu")
        message.channel.send("**Noot Noot**");
        break;
        case "g!lb":
        bot.log(bot, message, "g!lb")
        message.channel.send("http://littlebitch.greensapenguin.com/");
        break;
        case "g!reee":
        bot.log(bot, message, "g!reee")
        message.channel.send("REEEEEEEEEEEE");
        break;
        case "g!penguinvideo":
        bot.log(bot, message, "g!penguinvideo")
        message.channel.send("**penguins are bae** https://www.youtube.com/watch?v=c7M686pXr6M");
        break;
    }  
    if(message.content.toLowerCase().includes("cookies") && message.guild.id == "389472576235372565") {
        message.channel.send("https://tenor.com/YM4e.gif")
        //bot.channels.get("530923952412033044").send(`${message.author.tag} has used cookies in ${message.guild.name}`)
     }
    if(message.isMentioned(bot.user.id) && message.content.toLowerCase().includes('prefix')) return message.channel.send(`I heard the word \`prefix\` My prefix is \`${botConfig.prefix}\` use \`g!help\` to get started`);
    if(message.author.bot) return; //stops the bot from respoinding to itself
    if(message.channel.type === "dm") return; //make the bot not repsond to commands in DM because why....
 
    let messageArray = message.content.split(/\s+/g),
        command = messageArray[0],
        args = messageArray.slice(1),
        now = Date.now(),
        timeLimit = 3000,
        limit = bot.ratelimits.get(message.author.id);
    if(!command.startsWith(botConfig.prefix)) return; //if a command does not start with the prefix, do nothing
 
    if(limit != null) {
        if(limit >= now - timeLimit) {
            message.delete();
            return message.channel.send("Spam protection. Try again in `" + (Math.abs((now - limit) - timeLimit) / 1000).toFixed(2) + "` seconds.").then(m => m.delete(5000));
        } else {
            bot.ratelimits.set(message.author.id, now);
        }
    } else {
        bot.ratelimits.set(message.author.id, now);
    }
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});
 
// Log our bot in, keep the token save and don't post it on your server lol
// this reads it from a file anyway so if anyone was to see you in this file they wont see your secret token
bot.login(botConfig.GreenLogin);
 
//Error handling (Simplified)
process.on('unhandledRejection', error => bot.error(bot, "Unhandled Rejection" , error.stack))
process.on('uncaughtException', error => bot.error(bot, "Uncaught Execption" , error.stack));
 
//bot.on("error", (e) => console.error(e));
//bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e)); //remove the first // if you really want to see debug info
 
//Last Update by SUPERCHIEFYT 8th MAY 2019
// Last Change: Error handling system to post to channel
// Last Change : Sexy join/leave logs & guild blacklist system (/classes/noGreenBot4u.json)
