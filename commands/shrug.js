module.exports.run = (bot, message) => {
    message.channel.send("¯\\_(ツ)_/¯").then(m => {
        setTimeout(() => {
            m.edit("¯\\\\\\-(ツ)-/¯").then(ms => {
                setTimeout(() => {
                    ms.edit("¯\\_(ツ)_/¯")
                }, 500)
            })
        }, 500)

    })
}

module.exports.help = {
    name:"shrug"
}