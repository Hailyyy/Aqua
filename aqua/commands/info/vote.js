const { MessageEmbed } = require('discord.js');
module.exports={
    name: "vote",
    description: "gives the vote link",
    run: async(bot, message, args) => {
        const voteEmbed = new MessageEmbed()
        .setTitle('Vote For Audit! ✔')
        .setDescription("This is for if you want to vote for Audit, it would help out a ton!", `\u200B`)
        .addField('GBL: https://glennbotlist.xyz/bot/728218986994466816/vote', `\u200B`)
        .setFooter('Remember, it will help out!')
        .setColor("#7289da")

        message.channel.send(voteEmbed)
    }
}