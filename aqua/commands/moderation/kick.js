const {MessageEmbed} = require('discord.js');
module.exports={
    name: "kick",
    usage: '<user id> <reason>',
    timeout: 1,
    run: async(bot, message, args) =>{
        let User = message.guild.members.cache.get(args[0]);
        if (!args[0]) return message.channel.send(`Invalid usage, please actually choose someone to kick, otherwise I can't do anything! Hint: Copy their ID! 🤔`)
        if (!User)return message.channel.send(`That user is not in the server... so I cannot kick them. Sorry! 😥`) 
        let Reason = message.content.split(`.kick ${User.id} `)
        if(!args[1]) return message.channel.send("So, you're supposed to give a reason otherwise people are gonna think you kicked them for no reason!")
        if(!Reason) return message.channel.send("So, you're supposed to give a reason otherwise people are gonna think you kicked them for no reason!")
        if(!User.kickable) return message.channel.send(`Come on man, you cannot kick that person! They are probably have or are a higher role than you.`)
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry I cannot do that, you need the Kick Members permission for that!")
        message.delete()
        
        let embed = new MessageEmbed()
        .setTitle(`You have been kicked from ${message.guild.name}.`)
        .addField(`**Reason:** `, `${Reason.slice(1)}`)
        .setTimestamp()
        .setColor("#ff0000")     
         
         User.send(embed)
         User.kick('**Reason**')

        //message embed 
        const kickEmbed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`**${bot.users.cache.get(User.id).toString(`${bot.users.cache.get(User.id).id}`)}** has been **kicked** for **${Reason.slice(1)}**`)
        message.channel.send(kickEmbed)
       
    }    
}    