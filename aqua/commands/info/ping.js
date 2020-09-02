const Discord = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    timeout: 2000,
    run: async(bot, message, args) =>{
        message.channel.send(`Pinging...`).then(msg=>{
            const _ = new Discord.MessageEmbed()
            .setColor("#037ffc")
            .setDescription(`**Command:** ${Math.floor(msg.createdTimestamp -  message.createdTimestamp)}ms\n**Discord API Latency:** ${Math.round(bot.ws.ping)}ms`)
            
            msg.edit(_)
            msg.edit("\Here is my latency and ping!")   
              
                
        })    
    }  
}      