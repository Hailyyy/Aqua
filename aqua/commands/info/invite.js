const { MessageEmbed } = require('discord.js');
module.exports={
    name: "invite",
    description: "generates an invite link for the bot.",
    run: async(bot, message, args) => {
        const inviteEmbed = new MessageEmbed()
        .setTitle('Invite Link! 👥')
        .setDescription('If you wanna add me to your server, then here is the link to invite it! I will see you in your server!')
        .addField('**Invite:** https://discord.com/api/oauth2/authorize?client_id=728218986994466816&permissions=8&scope=bot',`\u200B`)
        .setFooter('If you are planning on inviting me, then please do! It would mean a lot!')
        .setColor("RANDOM")

        message.channel.send(inviteEmbed)

    }

}