module.exports.run = async (bot, message, args) => {
  let commandLog = bot.channels.get('530923952412033044')
    let command = ("`rip`")
    let guild = message.guild.name
    commandLog.send(`${message.author.username} has used ${command} in ${guild}`)
await message.channel.send({
    embed: {
      color: 0x00ff33,
      description: `R.I.P ${args.length ? args.join(' ') : 'Everything'}`,
      image: {
        url: 'https://greenbot.mwserver.co/images/tombstone_rip.png'
      },
      footer: {
        text: 'May the Soul Rest in Peace.'
      }
    }
  });
};


module.exports.help = {
    name:"rip"
}
