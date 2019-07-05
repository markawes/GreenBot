const Discord = require("discord.js")
//const pokemonGif = require('pokemon-gif');

module.exports.run = (bot, message, args) => {
let pokedexNumberToName = require('../node_modules/pokemon-gif/lib/pokedex-number-to-name');
let pokemonNameToNumber = require('../node_modules/pokemon-gif/lib/pokemon-name-to-number');

let baseUrl = 'http://www.pokestadium.com/sprites/xy/';
let extension = '.gif';

function getGifByPokedexNumber(pokedexNumber) {
  if (pokedexNumberToName.hasOwnProperty(pokedexNumber)) {
    let pokemonUrlName = pokedexNumberToName[pokedexNumber]
      .toString()
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");

    return baseUrl + pokemonUrlName + extension;
  } else {
    message.channel.send('Invalid pokedex number ' +  pokedexNumber); return;
  }
}

function getGifByPokemonName(pokemonName) {
  let lowercasePokemonName = pokemonName.toLowerCase();

  if (pokemonNameToNumber.hasOwnProperty(lowercasePokemonName)) {
    let pokemonUrlName = lowercasePokemonName
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");

    return baseUrl + pokemonUrlName + extension;
  } else {
    message.channel.send('Sorry, Pokestadium couldn\'t find "' + pokemonName + '"'); return;
  }
}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    return getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    return getGifByPokedexNumber(identifier);
  } else {
    message.channel.send('pokemonGif input must be type string or number'); return;
  }
}

module.exports = pokemonGif;
    let image = args.slice(0).join(" ")
    if (!args[0]) { return message.reply("Specify a Pokémon please!") } else {
    message.channel.send({ embed: new Discord.RichEmbed().setTitle(`Here is ${args}`).setColor("#00ff00").setTimestamp().setImage(pokemonGif(image)).setFooter("Image by Pokestadium") })
    //message.channel.send(pokemonGif(image))

//     const embed = new Discord.RichEmbed()
//   .setTitle(`Here is ${args}`)
// .setImage(`${pokemonGif(image)}`)
// .setFooter(`Image from Pokestadium`)
//   .setColor(0x00ff33)
//   message.channel.send({embed})
}
}
module.exports.help = {
    name: "pokemon"
}
