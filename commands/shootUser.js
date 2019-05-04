module.exports.run = async (bot, message, args) => {
    let commandLog = bot.channels.get('530923952412033044')
    let command = ("`shoot`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
    var shooter = message.author.username
    var target = message.mentions.members.first()
    if(!target) return message.channel.send(`${shooter}, who do you want to shoot?`)
    function random(min, max){  
        min = Math.ceil(min);
        max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)}

    if (random(0,1)) {
       
        message.channel.send(`${shooter} shot ${target} 🔫`)
        message.delete();
    }else{
        message.channel.send(`${shooter}  missed  ${target} you got lucky! `)
    }   
}
module.exports.help = {
    name:"shoot"
}