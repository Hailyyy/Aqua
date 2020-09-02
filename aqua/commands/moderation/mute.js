const Discord = require('discord.js');
const ms = require('ms');
module.exports={
    name: 'mute',
    usage: '<user id> <reason>',
    run:  async(bot, message, args) => {
        

        

         

        const user = message.mentions.users.first();
        if(!user) return message.channel.send('Please specify a user, otherwise I cannot take action on whoever you are trying to mute!')

        let member;

        try {
            member = await message.guild.members.fetch(user)
         } catch(err) {
            member = null;
        }

        if(!member) return message.channel.send('That user is not in the server! I cannot warn them. Sorry!');
        if(message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You cannot mute that person! ❌')

        const rawTime = args[1];
        const time = ms(rawTime);
        if(!time) return message.channel.send('Please specify an amount of time to mute this user for!')

        if(!message.member.hasPermission('ADMINISTRATOR') && !user.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You cannot mute that member!')
        message.delete()

        const reason = args.splice(2).join(' ');
        if(!reason) return message.channel.send('Please give a reason!')

        const channel = message.guild.channels.cache.find(c => c.name === 'mod-logs');

        const log = new Discord.MessageEmbed()
        .setTitle('User has been muted.')
        .addField('User:', user, true)
        .addField('Reason:', reason)
        .addField('Duration:', rawTime, true)
        .setColor('ff0000')
        message.channel.send(log);

        const embed = new Discord.MessageEmbed()
        .setTitle(`You were muted in ${message.guild.name}.`)
        .addField(`**Reason:**`, reason)
        .addField(`**Expiration Time:**`, rawTime, true)
        .setColor('#ff0000')
        
        

        try {
            user.send(embed);
        } catch(err) {
            console.warn(err);
        }

        const role = message.guild.roles.cache.find(r => r.name === 'Muted');

       

        member.roles.add(role);

       
        setTimeout(async() => {
            member.roles.remove(role);
        }, time);

    
    }
}