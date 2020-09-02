const humanizeDuration = require('humanize-duration');
const { MessageEmbed } = require('discord.js');
module.exports={
    name: "uptime",
    desc: "uptime bois",
    run: async(bot, message, args) => {
        const uptimeEmbed = new MessageEmbed()
        .setTitle('My Uptime! 📈')
        .setDescription(`**Uptime:** \`\`\`${humanizeDuration(bot.uptime, { round: true })}\`\`\``)
        .setColor('GREEN')
        
        message.channel.send(uptimeEmbed)
    }
}