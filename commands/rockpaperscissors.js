const
        rps = [
            'scissors',
            'rock',
            'paper'
        ],
        rpsF = (userAns, botAns) => {
            let choice = userAns,
                botChoice = botAns;
            if (choice === 'rock') {
                if (botChoice === 'scissors') {
                    return 'won';
                } else if (botChoice === 'paper') {
                    return 'lost';
                }
    
                return 'draw';
            } else if (choice === 'paper') {
                if (botChoice === 'rock') {
                    return 'won';
                } else if (botChoice === 'scissors') {
                    return 'lost';
                }
    
                return 'draw';
            } else if (choice === 'scissors') {
                if (botChoice === 'rock') {
                    return 'lost';
                } else if (botChoice === 'paper') {
                    return 'won';
                }
    
                return 'draw';
            }
        };

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.channel.send('Please choose rock(r), paper (p) or scissors (s) :smiley:');
    }
    let choice = args[0].toLowerCase();
    choice = choice === 'r' ? 'rock' : choice;
    choice = choice === 'p' ? 'paper' : choice;
    choice = choice === 's' ? 'scissors' : choice;
    if (!rps.includes(choice)) {
        return message.channel.send('Please only choose rock (r), paper (p) or scissors (s) :smiley:');
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = ':trophy: Congratulations, you **won** :trophy: \nYour choice: `' + choice + '` | GreenBot\'s Choice: `' + botChoice + '`';
    } else if (result === 'lost') {
        answer = ':x: Awww, you **lost** :x: \nYour choice: `' + choice + '` | GreenBot\'s Choice: `' + botChoice + '`';
    } else if (result === 'draw') {
        answer = ':neutral_face: It\'s a **draw** :neutral_face:\nYour choice: `' + choice + '` | GreenBot\'s Choice: `' + botChoice + '`';
    }

    message.channel.send(answer);
}


module.exports.help =  {
    name: "rps"
}
