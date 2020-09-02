const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'help',
    description: 'Shows all commands.',
    run: async(bot, message, args) => {
        const helpEmbed = new MessageEmbed()
        .setTitle("📜Audit - All Commands!📜")
        .setDescription("Here are all the commands that I have. More will be coming in the future.")
        .addField("**❔Info Commands❔**", '\`stats\`, \`devs\`, \`support\`, \`avatar\`, \`warns\`, \`emoji\`, \`weather\`, \`covid19\`, \`invite\`, \`vote\`, \`youngest\`, \`oldest\`, \`server-info\`, \`user-info\`', `\u200B`)
        .addField("**🎮Fun Commands🎮**", '\`8ball\`, \`rng\`, \`supreme\`, \`rps\`, \`gayme\`, \`pp\`, \`giveaway\`, \`say\`, \`audit\`, \`moti-quote\`', `\u200B`)
        .addField("**🛠Moderation Commands🛠**", '\`ban\`, \`kick\`, \`warn\`, \`mute\`, \`unban\`', `\u200B`)
        .addField("**💰Economy Commands**💰", '\`shop (not really a good command at the moment..)\`')
        .addField("**⚙Utility Commands⚙**", '\`slowmode\`, \`nick\`, \`timer\`, \`dm\`, \`purge\`, \`lock (server lock only)\`', `\u200B`)
        .addField("**👨‍💻Developer Commands👨‍💻**", '\`eval\`')
        .setColor("RANDOM")
        message.channel.send(helpEmbed)
    }
}