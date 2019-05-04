const A = require('discord.js');
exports.run = async (bot, message, args) => {
    message.delete();
    const emoji1 = '🇳'
    const emoji = '🇾'
    message.channel.send('Attention: This command could give you a mini seizure.. Do you want to continue?\nBy accepting you are responsible for giving other people seizures. (image will auto delete after 10 seconds for the safety of the members here.').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            sure.on('collect', r => {
                msg.delete();
                const emb = new A.RichEmbed()
                    .setColor(0xFFFF00)
                    .setImage('https://mark-wesley.co.uk/i/JdR.gif')
                    .setFooter(`Requested by: ${message.author.tag}`);
                message.channel.send({
                    embed: emb
                }).then(m => m.delete(15000));
            })
            no.on('collect', r => {
                msg.delete();
            })
        })
    })
}

module.exports.help = {
    name: "smile"
}