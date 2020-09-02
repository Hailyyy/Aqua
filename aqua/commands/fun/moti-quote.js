const { MessageEmbed } = require("discord.js");
module.exports={
    name: 'moti-quote',
    run: async(bot, message, args) =>{
            let responses = [
                "Everything you can imagine is real.",

                "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
                
                "It is never too late to be what you might have been.",
                
                "Try to be a rainbow in someone's cloud.",
                
                "In the midst of movement and chaos, keep stillness inside of you.", 
                
                "I have not failed. I've just found 10,000 ways that won't work.",
                
                "As we look ahead into the next century, leaders will be those who empower others.",
                
                "There are no mistakes, only opportunities.",
                
                "We can't help everyone, but everyone can help someone.",
                
                "In the middle of every difficulty lies opportunity.",
                
                "Education is the most powerful weapon which you can use to change the world.",
                
                "Your time is limited, so don't waste it living someone else's life.",
                
                "When the power of love overcomes the love of power the world will know peace.",
                
                "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                
                "If you can do what you do best and be happy, you're further along in life than most people.",
                
                 "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
                
                 "Life isn’t about finding yourself. Life is about creating yourself.",
                
                 "The best way of learning about anything is by doing.",
                
                 "Don't let the fear of striking out hold you back."
            
            ]
            let Responses = responses[Math.floor(Math.random()*responses.length)-1]
            let Embed = new MessageEmbed()
            .setTitle("Motivational Quote! 💙")
            .setDescription("**Audit says this:** "+Responses)
            .setColor("RANDOM")
            message.channel.send(Embed)
        }
    } 
 // yes i know ok