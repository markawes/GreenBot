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
            let list1 = [], list2 = [], list3 = [], list4 = [], list5 = [], list6 = [], overflow = [], roles = [];
            await server.forEach(async guild => {
                let member = await guild.members.get(user.id);
                roles.push(`**__${guild.name}__** (${guild.id})\n- Roles: ${member.roles.filter(c => c.id !== guild.id).sort((a, b) => b.position - a.position).map(c => c.name).slice(0, 10).join(', ') || "None"}`)
                if(list1 !== 5){
                    list1.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    - Roles: ${member.roles.filter(c => c.id !== guild.id).sort((a, b) => b.position - a.position).map(c => c.name).slice(0, 10).join(', ') || "None"}
                    `)
                }else
                if(list2 !== 5){
                    list2.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                }else
                if(list3 !== 5){
                    list3.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                }else
                if(list4 !== 5){
                    list4.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                }else
                if(list5 !== 5){
                    list5.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                }else
                if(list6 !== 5){
                    list6.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                }else{
                    overflow.push(`
                    **__${guild.name}__**${member.id === guild.ownerID ? "\n- Owner: Yes" :""}${member.hasPermission('ADMINISTRATOR') ? "\n- Administrator: Yes" : ""}${member.hasPermission("MANAGE_GUILD") ? "\n- Admin: Yes" : ''}${member.hasPermission(['MANAGE_MESSAGES', "BAN_MEMBERS", "KICK_MEMBERS"]) ? "\n- Mod: Yes" : ""}${member.nickname ? `\n- Nick: ${member.nickname}` : ""}
                    `)
                };
            });
            e.setAuthor(`@${user.tag} (${user.id})`, user.displayAvatarURL)
            .setTitle(`Servers Found`)
            .setTimestamp()
            
            if(list1.length !== 0) e.addField(`\u200b`, list1.join('\n'), true)
            if(list2.length !== 0) e.addField(`\u200b`, list2.join('\n'), true)
            if(list3.length !== 0) e.addField(`\u200b`, list3.join('\n'), true)
            if(list4.length !== 0) e.addField(`\u200b`, list4.join('\n'), true)
            if(list5.length !== 0) e.addField(`\u200b`, list5.join('\n'), true)
            if(list6.length !== 0) e.addField(`\u200b`, list6.join('\n'), true)
            if(overflow.length !== 0){
                let {body} = await post(`https://sourceb.in/api/bin`).send(`${overflow.join("\n")}`);
                e.addField(`Overflow`, `[Link](https://sourceb.in/${body.key}.txt)`, true)
            }
            if(roles.length !== 0){
                let {body} = await post(`https://sourceb.in/api/bin`).send(`${roles.join("\n")}`);
                e.addField(`Roles`, `[Link](https://sourceb.in/${body.key}.txt)`, true)
            }
            if(e.fields.length === 0) return msg.edit(e.setTitle("INFO").setColor("RED").setDescription(`No servers in common found!`));
            msg.edit(e)
            break;
          }
          
     
}
}
