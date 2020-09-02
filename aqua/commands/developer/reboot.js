module.exports = {
    name: "restart",
    category: "owner",
    run: async (bot, message, args) => {
        if (message.author.id !== '395732703984746496', '482957218980036618') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Right away! I'll literally just **force** myself to sleep.`)
        process.exit();
    }
}