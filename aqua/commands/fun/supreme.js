const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = {
  name: "supreme",
  usage: ";supreme <text>",
  aliases: [],
  category: 'fun',
  description: "Make a supreme logo with text of your choice ",
  run: async (client, message, args) => {
    let text = args.slice(0).join(' ').split(' ').join('%20')
    if(!text) return message.channel.send("Hey! Please input some text after `;supreme`. Otherwise I will not be able to generate your awesome 'Supreme' logo!")
    const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")//This is red for now :)
      .setImage(`https://api.alexflipnote.dev/supreme?text=` + text)
    message.channel.send({ embed });
  }
}