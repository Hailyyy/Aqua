const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'support',
    description: 'gives the invite of the support server.',
    run: async(bot, message, args) => {
        const supportEmbed = new MessageEmbed()
        .setTitle('Support Server! 🔨')
        .setDescription('In the support server, you can ask our staff on any issues or bugs with Audit!')
        .addField("**Invite: https://discord.gg/ku3X6j4**", `\u200B`)
        .setColor("#ff0000")
        message.channel.send(supportEmbed)
}
}
