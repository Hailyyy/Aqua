const { MessageEmbed } = require("discord.js");
module.exports={
    name: 'pp',
    usage: ';pp',
    run: async(bot, message, args) =>{
            let responses = [
                "8=D",
                "8==D",
                "8===D",
                "8====D",
                "8=====D",
                "8======D",
                "8=======D",
                "8========D",
                "8=========D",  
                "8==========D",
                "8===========D",
                "8============D",
                "8=============D",
                "8==============D",
                "8===============D",
                "8================D",
                "8=================D",
                "8==================D",
                "8===================D",
                "8====================D",
                "8=====================D",
                "8======================D",
                "8=======================D",     
                







            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            let Embed = new MessageEmbed()
            .setTitle("PP Sizer! 🍆")
            .setDescription("**This is your pp:** "+Responses)
            .setColor("RANDOM")
            message.channel.send(Embed)
        }
    }
