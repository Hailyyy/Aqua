const { MessageEmbed } = require("discord.js");
module.exports={
    name: 'rps',
    usage: ';rps',
    timeout: 2000,
    run: async(bot, message, args) =>{
            let responses = [
                "Rock",
                "Paper",
                "Scissors",
                "Rock",
                "Paper",
                "Scissors",
                "Rock",
                "Paper",
                "Scissors",
            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            let Embed = new MessageEmbed()
            .setTitle("Rock, paper, scissors time! 🥌📜✂")
            .addField("**Audit picks:** "+Responses, `\u200B`)
            .addField("**You pick:** "+Responses, `\u200B`)
            .setColor("RANDOM")
            message.channel.send(Embed)
        }
    }
