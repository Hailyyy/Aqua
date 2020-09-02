module.exports={
    name: 'nick',
    description: "Set a users nickname",
    category: 'misc',
    run: async(bot, message, args) =>{
        let name = args.slice(1).join(" ")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Hey! You need the Manage Messages permission to use this command.')
        message.delete()
        const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        if(!User) return message.channel.send("No user found. Please try again mentioning a user.")
        if(!args[0]) return message.channel.send("Please mention a user to change their nickname!")
        if(!name){
           return message.channel.send(`Ok! Nickname set for ${User} reset.`)
        }
        User.setNickname(name)
        message.channel.send(`Right away! Nickname set for ${User} as **${name}**. `)
    
    }
}