const { MessageEmbed } = require("discord.js");
module.exports={
    name: '8ball',
    run: async(bot, message, args) =>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question){
            return message.reply("Hey! Please state a question so I can answer your 8Ball question!")
        } else {
            let responses = [
                "As I see it, yes",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don’t count on it.",
                "It is certain.",
                "It is decidedly so.",
                "Most likely.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Outlook good.",
                "Reply hazy, try again.",
                "Signs point to yes.",
                "Very doubtful.",
                "Without a doubt.",
                "Yes – definitely.",
                "You may rely on it.",
            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            let Embed = new MessageEmbed()
            .setTitle("8Ball Time!")
            .setDescription('**Your Question:** '+question+"\n8Ball Says: "+Responses)
            .setColor("RANDOM")
            message.channel.send(Embed)
        }
    }
}    