const Discord = require("discord.js")
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const cpuStat = require("cpu-stat")
module.exports.run = async (bot, message) => {
cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }

 const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embedStats = new Discord.RichEmbed()
    .setTitle("*** Stats ***")
    .setColor("#00ff00")
    .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("• Uptime ", `${duration}`, true)
    .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
    .addField("• Discord.js", `v${version}`, true)
    .addField("• Node", `${process.version}`, true)
    .addField("• CPU", `\`\`\`md\n${cpuStat.totalCores()} Cores ${cpuStat.avgClockMHz()}MHz\`\`\``)
    .addField("• CPU usage", `\`${percent.toFixed(2)}%\``,true)
    .addField("• Arch", `\`${os.arch()}\``,true)
    .addField("• Platform", `\`\`${os.platform()}\`\``,true)
    message.channel.send(embedStats)
  });
};

module.exports.help = {
    name: "sysinfo"
}
