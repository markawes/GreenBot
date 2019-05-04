const Discord = require('discord.js'); //loads the library
const fs = require("fs"); //loads module to read files
const bot = new Discord.Client({disableEveryone: true}) //the client and prevent bot from pinging everyone
const botConfig = require("./botConfig.json"); //the config file
const prefix = botConfig.prefix; //the prefix from the config file
bot.commands = new Discord.Collection(); //for commands
bot.ratelimits = new Discord.Collection(); // create collection of rate limit

fs.readdir("./commands/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		//console.log(`${i + 1}: ${f} loaded!`); //<--- remove the // at the BEGINNING to show command names in log
		bot.commands.set(props.help.name, props);
	});
});

bot.on('ready', () => {
  console.log(`Greensanoob is online! and logged in as ${bot.user.username}`); //if this ever shows anything else but GreenBot then shut it down and tell me
  bot.user.setPresence({ status: 'online', game: { name: 'Discord' } });
});

//sid = 389472576235372565

  //begin Marks code for stats
  bot.on('guildMemberAdd', member => {
		member.guild.channels.get('430206024243478528').setName(`?? Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
			member.guild.channels.get('430206266208419851').setName(`?? Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
			member.guild.channels.get('430206301537304576').setName(`? Bots + Members : ${member.guild.members.size}`)
	
		});
	
		bot.on('guildMemberRemove', member => {
			member.guild.channels.get('430206024243478528').setName(`?? Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`)
			member.guild.channels.get('430206266208419851').setName(`?? Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
			member.guild.channels.get('430206301537304576').setName(`? Bots + Members : ${member.guild.members.size}`)
			
			});
			//end Marks code for stats

	bot.on("guildCreate", guild => {
				console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
					bot.channels.get("430436180723499010").send(`New guild joined: ${guild.name} \nGuild ID: (id: ${guild.id}). \nMembers in Guild ${guild.memberCount})\n Guild Owner: ${guild.owner}`);
				});
			
	bot.on("guildDelete", guild => {
				console.log(`Left guild ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members!`);
				bot.channels.get("430436180723499010").send(`Left guild ${guild.name} \nGuild ID: (id: ${guild.id}). \nGuild had: ${guild.memberCount} members!\nGuild Owner: ${guild.owner}`);
			  });

// Create an event listener for messages
bot.on('message', async message => {

	//users who have the role set below will have their messages deleted
	const msgBanned = bot.guilds.get("389472576235372565").roles.find("name", "mute"); //only works on Greens main server
	if(!message.guild) return //if message is not in a guild, ignore
	if(message.webhookID) return //if message comes from a webhook, ignore
	if (message.member.roles.has(msgBanned.id)) {
	message.delete()
	message.reply("You have been blocked from sending messages, please DM Green").then(m => m.delete(3000));
	}
	//end delete messages with role set above
	
	//Attachment Block Start
	
	const role = bot.guilds.get("389472576235372565").roles.find('name', 'Attachment Block')
	if(message.member.roles.has(role.id) && message.attachments.size > 0) {
		message.delete()
	return message.reply("You have been blocked from sending attachments in this server!")
		}
	// Attachment Block End
	if (message.content == "green") {
		message.channel.send(":penguin:");
	}
	if (message.content == "Green")  {
		message.channel.send(":penguin:");
	}

	if (message.content =="g!") {
		message.channel.send("So.... you want me to run a command... well tell me which one noob, I'm not physic!");
	}

	if (message.content == "sf") {
		message.channel.send("Did you want this? mc.slimefantasy.com");
	}

	if (message.content =="penguin") {
		message.channel.send(":penguin:");
	}

	if (message.content =="Penguin") {
		message.channel.send(":penguin:");
	}
	
	if (message.content =="Penguins") {
		message.channel.send(":penguin::penguin::penguin:");
	}
	
	if (message.content =="penguins") {
		message.channel.send(":penguin::penguin::penguin:");
	}
	
	if (message.content =="Greenbot") {
		message.channel.send(`${message.author.username} loves GreenBot :green_heart:`);
	}
		
	if (message.content =="greenbot") {
		message.channel.send(`${message.author.username} loves GreenBot :green_heart:`);
	}
	
	if (message.content =="monkey") {
		message.channel.send(`:monkey:`);
	}
	
	if (message.content =="monkeys") {
		message.channel.send(`:monkey: :monkey: :monkey:`);
	}
	
	if (message.content =="g!retard") {
		message.channel.send("https://imgur.com/fiCpVCB");
	}
		
	if (message.content =="g!monkeyvideo") {
		message.channel.send("https://www.youtube.com/watch?v=8VnYliTyxjY");

	}
	
	if (message.content =="g!penguinvideo") {
		message.channel.send("**penguins are bae** https://www.youtube.com/watch?v=c7M686pXr6M");
	}

	if(message.content === `<@${bot.user.id}>`) return message.channel.send(`My prefix for **[${message.guild.name}]** is \`${botConfig.prefix}\``);
	if(message.author.bot) return; //stops the bot from respoinding to itself 
	if(message.channel.type === "dm") return; //make the bot not repsond to commands in DM because why....

	let messageArray = message.content.split(/\s+/g);
		let command = messageArray[0];
		let args = messageArray.slice(1);
	
		if(!command.startsWith(botConfig.prefix)) return; //if a command does not start with the prefix, do nothing

	
	let limit = bot.ratelimits.get(message.author.id);
	let now = Date.now();
	let timeLimit = 3000; // this is in miliseconds so 3000ms is 3 seconds incase you ever want to change it
	// changed to 3 seconds because its annoying me when testing lol

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
//Error handling
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e)); //remove the first // if you really want to see debug info