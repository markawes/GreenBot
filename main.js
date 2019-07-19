const {Client, Collection, RichEmbed} = require('discord.js'),
      fs = require('fs'),
      bot = new Client({disableEveryone: true, fetchAllMembers: true}),
      botConfig = require('./botConfig.js'),
      prefix = botConfig.prefix,
      sexy = require('chalk'),
      moment = require('moment'),
      banished = require('./classes/noGreenBot4u.json'),
      DBL = require("dblapi.js"),
      dbl = new DBL(process.env.dblkey, bot),
      verifLevels = ["None", "Low, must have verified email on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
bot.odevs = botConfig.ownerDev
bot.commands = new Collection(); //for commands
bot.ratelimits = new Collection(); // create collection of rate limit
bot.log = async function(bot, message, command, args){
    try{
        let e = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTitle(`Command used: ${command}`)
        .setFooter(`Server: ${message.guild.name} (${message.guild.id})`, message.guild.iconURL)
        .setTimestamp()
	.setColor(message.guild ? message.member.displayColor : `#FF0000`)
	args ? e.setDescription(args.join(" ")) : null;
      bot.channels.get('530923952412033044').send(e)
    }catch(e){console.log(`Command Log ERROR: ${e.stack}`)}
};
bot.error = async function(bot, title, error){
    console.log(`[${title}] - ${error}`)
    let e = new RichEmbed()
    .setTitle(title)
    .setDescription(`\`\`\`js\n${error}\`\`\``)
    if(title === "Uncaught Execption"){
      e.setFooter(`Process will exit in a few seconds.`)
      setTimeout(() => {
         return process.exit(1)
      }, 1500)
      }
   try{bot.channels.get('567115961379979269').send(e)}catch(e){}
}
bot.owner = "188861825100677120";
fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length == 0) return null;
    console.log(sexy.white.bgBlue.bold(`Loading ${jsfiles.length} commands!`));
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});
 
bot.on('ready', () => {
      console.log(sexy.white.bgGreen.bold(`Bot Account: ${bot.user.tag}\nBot ID: ${bot.user.id}\nServer Count: ${bot.guilds.size}\nEmoji Count: ${bot.emojis.size}\nChannel Count: ${bot.channels.size}\nUser Count: ${bot.users.size}\nI am ready!`));
      bot.user.setPresence({status: "online", game: {name: "g!help | For Help Join GreenBots Support Server https://discord.gg/YGMcEQ3 | Sub To GreenBots Youtube Channel !Greenbotyt", type: "STREAMING", url: "https://www.twitch.tv/greensapenguin"}})
});
dbl.on('posted', () => console.log('Server count posted!'))
dbl.on('error', e => console.log(`Oops! ${e}`))
bot.on("guildCreate", async guild => {
      if(guild.available == true){ 
      console.log(`[Server Joined]: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
   const embed = new RichEmbed()
   .setColor(`#FF000`)
   .setTitle(`Server Joined${guild.large ? " - Large Server" : ""}`)
   .setTimestamp()
   .setThumbnail(guild.iconURL || guild.owner.user.displayAvatarURL)
   .setDescription(`${guild.name} ${guild.id}`)
   .addField(`INFO`, `
   **__Region & Verification Level__**
   - Verification: ${verifLevels[guild.verificationLevel]}
   - Region: ${guild.region}

   **__Member Count__**
   - Total: ${guild.memberCount}
   - Humans: ${guild.members.filter(c => !c.user.bot).size}
   - Bots: ${guild.members.filter(c => c.user.bot).size}

   **__Misc__**
   - Channels: ${guild.channels.size}
   - Roles: ${guild.roles.size}
   - Emojis: ${guild.emojis.size}

   **__Server Created__**
   ${moment(guild.createdAt).format('dddd, MMMM Do YYYY, h:mm:ssa')}
   `)
   .addField(`Owner`, `${guild.owner.user.tag} (\`${guild.owner.user.id}\`)`)
   let percent = Math.round(((guild.members.filter(c => c.user.bot).size / guild.memberCount) * 100).toFixed(2)) >= "80"
   if(percent){
         embed.addField(`Warning`, `This server is 80% a bot server.`)
   }
     bot.channels.get('526573436818948107').send(embed).catch(o_O => {})
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
 }
});
bot.on("guildDelete", guild => {
if(guild.available == true) {
    console.log(`[Server Left]: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members!`);
    const embed = new RichEmbed()
    .setColor(`#FF0000`)
    .setTitle(`Server Left${guild.large ? " - Large Server" : ""}`)
    .setTimestamp()
    .setThumbnail(guild.iconURL || guild.owner.user.displayAvatarURL)
    .setDescription(`${guild.name} ${guild.id}`)
    .addField(`INFO`, `
    **__Region & Verification Level__**
    - Verification: ${verifLevels[guild.verificationLevel]}
    - Region: ${guild.region}
 
    **__Member Count__**
    - Total: ${guild.memberCount}
    - Humans: ${guild.members.filter(c => !c.user.bot).size}
    - Bots: ${guild.members.filter(c => c.user.bot).size}
 
    **__Misc__**
    - Channels: ${guild.channels.size}
    - Roles: ${guild.roles.size}
    - Emojis: ${guild.emojis.size}
 
    **__Server Created__**
    ${moment(guild.createdAt).format('dddd, MMMM Do YYYY, h:mm:ssa')}
    `)
    .addField(`Owner`, `${guild.owner.user.tag} (\`${guild.owner.user.id}\`)`)
bot.channels.get('526573436818948107').send(embed).catch(o_O => {})
}
});
bot.on('guildMemberAdd', async (member) => {
    if(member.guild.id == '389472576235372565'){ // Greens Server
    member.guild.channels.get('430206024243478528').setName(`Member Count: ${member.guild.members.filter(m => !m.user.bot).size}`)
    member.guild.channels.get('430206266208419851').setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`)
    member.guild.channels.get('430206301537304576').setName(`Total Members: ${member.guild.memberCount}`)
   }
});
bot.on('guildMemberRemove', async (member) => {
    if(member.guild.id == '389472576235372565'){ // Greens Server
    member.guild.channels.get('430206024243478528').setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
    member.guild.channels.get('430206266208419851').setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
    member.guild.channels.get('430206301537304576').setName(`Total Members: ${member.guild.memberCount}`)
   }
});
 
// Create an event listener for messages
bot.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm" || message.webhookID) return; //stops GreenBot from spamming the prefix when he sees the word "prefix"
      if(message.member.nickname){ if(message.member.nickname.startsWith("[AFK]")) message.reply("Do `g!bk` to turn off AFK mode!").then(m => m.delete(5000))}
      if(message.channel.id === "584146819110404107"){
	if(!message.content.includes("<:") && !message.content.includes("<a:") &&  !message.content.includes(":") && !message.content.includes(":>") ){
	message.delete()
	return message.channel.send(`${message.author.tag}, this is an emote only channel!`).then(d => d.delete(15000))
	}
      }
    if (message.guild.id === "389472576235372565"){
    let bannedrole = await message.guild.roles.find(c => c.name.toLowerCase() ===  "mute")
    if(bannedrole){
      if(message.member.roles.has(bannedrole.id)) return null;
      message.delete().catch(o_O => {})
      message.reply("You have been blocked from sending messages, please DM Green").then(m => m.delete(3000));
    }
    }
    if(message.attachments.size !== 0 && message.guild.id === "389472576235372565") {
      let role = await message.guild.roles.find(c => c.name.toLowerCase() === "attachment block");
      if(role){
      if(message.member.roles.has(role.id)) return null;
      message.delete().catch(o_O => {})
      return message.reply("You have been blocked from sending attachments in this server!")
      }
}
   switch(message.content.toLowerCase()){
       case "master":
       message.channel.send(`**${bot.users.get(bot.owner).tag} is my Master**`)
       bot.log(bot, message, 'Master')
       break;
       case "g!":
	if(message.guild.id === "264445053596991498") return;
       message.channel.send("So.... you want me to run a command... well tell me which one noob, I'm not physic!");
       break;
       case "g!greenbotyt":
       message.channel.send("https://www.youtube.com/channel/UCzr7PNj3mMUE1uRRcM-tw5g");
        bot.log(bot, message, "g!GreenBotYT");
        break;
        case "penguin":
        message.channel.send('🐧')
        break;
        case "g!prefix":
      message.channel.send({embed: {title: "My prefix", description: botConfig.prefix, color: message.member.displayColor, timestamp: new Date()}})
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
        case "g!penguintypes":
        bot.log(bot, message, "penguintypes")
        message.channel.send("**List of Penguin Species** https://www.birdlife.org/worldwide/news/list-penguin-species");
        break;
        case "g!penguinvideo":
        bot.log(bot, message, "g!penguinvideo")
        message.channel.send("**penguins are bae** https://www.youtube.com/watch?v=c7M686pXr6M");
        break;
    }  
    if(message.content.toLowerCase().includes("cookies") && message.guild.id == "389472576235372565") {
        message.channel.send("https://tenor.com/YM4e.gif")
     }
//     if(message.isMentioned(bot.user.id) && message.content.toLowerCase().includes('prefix')) return message.channel.send(`I heard the word \`prefix\` My prefix is \`${botConfig.prefix}\` use \`g!help\` to get started`);
    let messageArray = message.content.split(/\s+/g),
        command = messageArray[0].replace(/^(?:<@!?)?(432267856869064704)>?$/, botConfig.prefix.toLowerCase()),
        args = messageArray.slice(1),
        now = Date.now(),
        timeLimit = 3000,
        limit = bot.ratelimits.get(message.author.id);
    if(!command.toLowerCase().startsWith(botConfig.prefix.toLowerCase())) return;
    if(limit != null) {
        if(limit >= now - timeLimit) {
            message.delete();
            let timeout = new RichEmbed()
            .setColor(`#FF0000`)
            .setTitle(`Woah there.. slow down..`)
            .setDescription(`Try again in ${(Math.abs((now - limit) - timeLimit) / 1000).toFixed(2)} seconds.`)
            return message.channel.send(timeout).then(m => m.delete(5000));
        } else {
            bot.ratelimits.set(message.author.id, now);
        }
    } else {
        bot.ratelimits.set(message.author.id, now);
    }
    let cmd = bot.commands.get(command.toLowerCase().slice(prefix.length));
    if(cmd){
	bot.log(bot, message, command.toLowerCase().slice(prefix.length), args)
	cmd.run(bot, message, args)
    }
});
bot.login(botConfig.GreenLogin);
process.on('unhandledRejection', error => bot.error(bot, "Unhandled Rejection" , error.stack))
process.on('uncaughtException', error => {
      bot.error(bot, "Uncaught Execption" , error.stack)
});
