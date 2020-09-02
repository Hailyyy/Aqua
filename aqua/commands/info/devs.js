const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'devs',
    description: 'shows devs',
    run: async(bot, message, args) => {
        const devsEmbed = new MessageEmbed()
        .setTitle("Audits' Developers! 👨‍💻")
        .setDescription("Here are the Discord name/tags of developers!")
        .addField('**Developers:** Hailyy#0666, Avvoid#9999')
        .setFooter('Note: these are really cool people by the way!')
        message.channel.send(devsEmbed)
        
    }
}