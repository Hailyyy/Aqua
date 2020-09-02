const {MessageEmbed} = require('discord.js');
module.exports={
    name: "ban",
    usage: '<user id> <reason>',
    timeout: '1',
    run: async(bot, message, args) =>{
        let User = message.guild.members.cache.get(args[0]);
        if (!args[0]) return message.channel.send(`Invalid usage, please actually choose someone to ban, otherwise I can't do anything! Hint: Copy their ID! 🤔`)
        if (!User)return message.channel.send(`That user is not in the server... so I cannot ban them, idot. Copy their ID!`) 
        let Reason = message.content.split(`.ban ${User.id} `)
        if(!args[1]) return message.channel.send("So, you're supposed to give a reason otherwise people are gonna think you banned them for no reason!")
        if(!Reason) return message.channel.send("So, you're supposed to give a reason otherwise people are gonna think you banned them for no reason!")
        if(!User.ban) return message.channel.send(`Come on man, you cannot ban that person! They are probably have or are a higher role than you.`)
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("Sorry I cannot do that, you need the Ban Members permission for that!")
        message.delete()
        
        let embed = new MessageEmbed()
        .setTitle(`You have been banned from ${message.guild.name}.`)
        .addField(`**Reason:** `, `${Reason.slice(1)}`)
        .setTimestamp()
        .setColor("#ff0000")   
        .setFooter(`Command used by `+message.author.tag, message.author.displayAvatarURL())  
         User.send(embed)
         User.ban('**Reason**')

        //message embed 
        const banEmbed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`**${bot.users.cache.get(User.id).toString(`${bot.users.cache.get(User.id).id}`)}** has been **banned** for **${Reason.slice(1)}**`)
        .setFooter(`Command used by `+message.author.tag, message.author.displayAvatarURL())  
        message.channel.send(banEmbed)
       
    }    
}    