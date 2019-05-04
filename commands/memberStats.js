module.exports.run = (bot, message) => {
    var human = 0;
    var bot = 0;
    var on = 0;
    var off = 0;
    var idle = 0;
    var dnd = 0;
    message.guild.members.forEach(function(m){
          switch(m.user.presence.status){
                case 'online':
                      on++;
                      break;
                case 'offline':
                      off++;
                      break;
                case 'idle':
                      idle++;
                      break;
                case 'dnd':
                      dnd++;
                      break;
                default:
                      break;
          }
          if(m.user.bot){
                bot++
          }else{
                human++
          }
    });
    let guild  = message.guild.name
    message.channel.send({embed: {
          title: `Members Statistics for ${guild}`,
          fields: [
                {name: 'Human', value: human, inline: true},
                {name: 'Bot:', value: bot, inline: true},
                {name: 'Ratio -  Human / Bot:', value: String(human / bot), inline: true},
               // {name: 'Online/Offline/Invisible', value: '', inline: true},
                {name: 'Online:', value: String(on), inline: true},
                {name: 'Offline:', value: String(off), inline: true},
             //   {name: 'AFK/DND', value: 'Away From Keyboard/Do Not Disturb', inline: true},
                {name: 'AFK', value: String(idle), inline: true},
                {name: 'Do Not Disturb', value: String(dnd), inline: true}
          ],
          color: 0x00ff00
    }})
    
    }
    
    module.exports.help = {
        name: "memberstats"
    }