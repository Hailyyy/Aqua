const Discord = require("discord.js");

module.exports = {
  name: "purge",
  category: "moderation",
  timeout: 1000,
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply("Please tell me you know you don't have the Manage Messsages permission...");
    if (!args[0] > [100])
      return message.channel.send(
        "Hey! I can only purge **100** messages at a time!"
      );
    if (!args[0])
      return message.channel.send(
        "Hey! You need to specify a number of messages you want to purge!"
      );
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel
        .send(`Cleared **${args[0]}** messages. Hope this helped!`)
    });
  }
};