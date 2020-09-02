const { MessageEmbed } = require('discord.js');
const humanizeDuration = require('humanize-duration')
module.exports={
    name: "stats",
    timeout: 1000,
    run: async(bot, message, args) => {
        const statsEmbed = new MessageEmbed()
        .setTitle("Here are my stats! ➕")
        .setDescription("These stats show how many users use me, how many servers I am in, how many channels in total there are in the servers I am in and my developers' CPU!")
        .addField(`**🌐 Users:**`, `\`\`\`${bot.users.cache.size}\`\`\``)
        .addField(`**📁 Servers:**`, `\`\`\`${bot.guilds.cache.size}\`\`\``)
        .addField(`**📊 Channels:**`, `\`\`\`${bot.channels.cache.size}\`\`\``)
        .addField(`**⚙ CPU:**`, `\`\`\`Intel® Xeon Processor\`\`\``)
        .addField(`**📈 Uptime:**`, `\`\`\`${humanizeDuration(bot.uptime, { round: true })}\`\`\``)
        .setColor("#037ffc")
        .setTimestamp()
        .setFooter(`Requested by `+message.author.tag, message.author.displayAvatarURL())


        message.channel.send(statsEmbed)
    
    }
}    
