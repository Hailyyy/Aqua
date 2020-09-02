const warns = require("../../models/warns");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "warn",
  description: "Warn a user",
  category: "moderation",
  usage: "<User mention> <Reason>",
  run: async (bot, message, args) => {   if (!message.member.permissions.has('MANAGE_MESSAGES'))
      return message.channel.send(
        `**Uh oh.... You do not have the: Manage Messages Permission.**`
      );
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`You did not mention a user!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`You did not specify a reason!`);
    warns.findOne(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data) {
          let newWarns = new warns({
            User: user.id,
            Guild: message.guild.id,
            Warns: [
              {
                Moderator: message.author.id,
                Reason: args.slice(1).join(" "),
              },
            ],
          });
          newWarns.save();
          const warnsemb = new MessageEmbed()
          .setTitle("New Warn")
          .setThumbnail("https://www.tailgatecrew.net/wp-content/uploads/2018/07/emergency.png")
          .setColor("ff0000")
          .setDescription(`${user.tag} has been warned. They now have **1** warn.`
        );
          message.channel.send(warnsemb);
        } else {
          data.Warns.unshift({
            Moderator: message.author.id,
            Reason: args.slice(1).join(" "),
          });
          data.save();
          const warmembed = new MessageEmbed()
          .setTitle("Warn")
          .setThumbnail("https://www.tailgatecrew.net/wp-content/uploads/2018/07/emergency.png")
          .setDescription(`${user.tag} has been warned with the reason of ${args.slice(1).join(" ")}. They know have ${data.Warns.length} warns.`)
          .setAuthor("New Warn")
          .setColor("#ff0000")// The color of this embed is red currently
          message.channel.send(warmembed);
        }
      }
    );
  },
};