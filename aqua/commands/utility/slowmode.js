module.exports = {
  name: "slowmode",
  category: "utility",
  description: "Set the slowmode for the channel!",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANNAGE_MESSAGES"))
      return message.channel.send(
        `Hey! You need the Manage Messages permission to use this command.`
      );
    if (!args[0])
      return message.channel.send(
        `Hey! Please specify an amount of time to set the slowmode to. Ex: ;slowmode 12`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      bot.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Hey! You need to provide a reason why you are setting or changing the slowmode of this channel. Ex ;slowmode 12 chat very active.";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(`Right away! I have set the slowmode to **${args[0]}** with the reason: **${reason}**`
    );
  },
};