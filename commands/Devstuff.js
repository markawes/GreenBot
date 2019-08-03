const {RichEmbed} = require("discord.js")
const {post} = require("superagent");
const  verifLevels = [
    "None",
    "Low: must have verified email on account",
    "Medium: must be registered on Discord for longer than 5 minutes",
    "High: (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes",
    "Very High: ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"
    ];
module.exports = {
    help: {name: "dev"},
    run: async (bot, message, args) => {
          let e = new RichEmbed().setTitle("Loading").setColor("#FF000").setTimestamp()
          let msg = await message.channel.send(e);
          if(!bot.odevs.includes(message.author.id)) return msg.edit(e.setTitle(`No can do.. this is a bot developer only command!`).setColor("RED"));
          if(!args[0]) return msg.edit(
          e.setTitle("Invalid Args")
          .setDescription(`\`g!dev [type] (id)\``)
          .addField(`Types`, `\`server\`, \`user\``)
          );
          switch(args[0].toLowerCase()){
            case "server":
            if(!args[1]) return msg.edit(e.setTitle(`Invalid Args`).setDescription(`The server id is???, come on dude I can't read your mind!`).setColor('RED'))
            let guild = bot.guilds.get(args[1]);
            if(!guild) return msg.edit(e.setTitle(`Invalid Server`).setDescription(`I ain't in that server`).setColor('RED'));
            e.setAuthor(`${guild.name} (${guild.id})`, guild.iconURL)
            .setTimestamp()
            .setColor('PURPLE')
            .setThumbnail(guild.iconURL)
            .setDescription(`
            **__INFO__**
            - Available: ${guild.available ? "Yes" : "No"}
            - Icon: ${guild.iconURL ? `[Click Here](${guild.iconURL})` : "None"}
            - Verified: ${guild.verified ? "Yes" : "No"}
            - Verification: ${verifLevels[guild.verificationLevel]}  
            - Features: ${guild.features.map(c => `\`${c}\``).join(', ') || "None"}     
            
            **__Members__**
            - Total: ${guild.memberCount}
            - Bots: ${guild.members.filter(c => c.user.bot).size}
            - Humans: ${guild.members.filter(c => !c.user.bot).size}
        
            **__Misc__**
            - Roles: ${guild.roles.size}
            - Emojis: ${guild.emojis.size}
            - Channels: ${guild.channels.size}
            `)
            .addField(`Owner`, `${guild.owner.user} \`@${guild.owner.user.tag}\` (${guild.ownerID})`)
            .setTitle(`Server Information`)
            msg.edit(e)
            break;
            case "user":
            const user = await bot.fetchUser(message.mentions.users.first() ? message.mentions.users.first().id : args[1] ? args[1] : message.author.id).catch(err => {
            return msg.edit(e.setTitle(`Invalid User`).setDescription("User Not Found").setColor("RED"));
            })
            if(await e.title === "Invalid User") return null;
            if(!user) return msg.edit(e.setTitle(`Invalid User`).setDescription("User Not Found").setColor("RED"));
            let server = bot.guilds.filter(c => c.members.get(user.id));
            if(server.size === 0) return msg.edit(e.setTitle(`INFO`).setColor("RED").setDescription(`Can't find any servers with \`@${user.tag}\``));
            let list1 = [];
            await server.forEach(async guild => {
                let member = await guild.members.get(user.id);
                    list1.push(`
                    **__${guild.name}__** (${guild.id})
                    - Owner: ${member.id === guild.ownerID ? "Yes" :"No"}
                    - Administrator: ${member.hasPermission('ADMINISTRATOR') ? "Yes" : "No"}
                    - Admin: ${member.hasPermission("MANAGE_GUILD") ? "Yes" : 'No'}
                    - Mod: ${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "Yes" : "No"}
                    - Nick: ${member.nickname ? `${member.nickname}` : "None"}
                    - Roles: ${member.roles.filter(c => c.id !== guild.id).sort((a, b) => b.position - a.position).map(c => c.name).slice(0, 10).join(', ') || "None"}
                    `)
            });
            e.setAuthor(`@${user.tag} (${user.id})`, user.displayAvatarURL)
            .setTitle(`Servers Found`)
            .setTimestamp()
            if(list1.join(" ").length >= 2040){
             let {body} = await post(`https://sourceb.in/api/bin`).send(`${list1.join("\n")}`);
             e.addField(`Servers`, `[Link](https://sourceb.in/${body.key}.txt)`, true)
            }else{
            e.setDescription(list1.join('\n') || "None")
            }
            msg.edit(e)
            break;
          }
          
     
}
}
