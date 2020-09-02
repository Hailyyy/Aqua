const warns = require("../../models/warns");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "warns",
  description: "Get a user's warns in the guild!",
  category: "moderation",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send(`No user specified!`);
    warns.find(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.channel.send(
            `${user.user.tag} Has No Warns!`
          );
        let Embed = new MessageEmbed()
          .setTitle(`${user.user.tag}'s warns in ${message.guild.name}.. `)
          .setColor("#ff0000")//red #ff0000
          .setDescription(
            data.map((d) => {
              return d.Warns.map(
                (w, i) =>
                  `${i} - Moderator: ${
                    message.guild.members.cache.get(w.Moderator).user.tag
                  } Reason: ${w.Reason}`
              ).join("\n");
            })
          );
        message.channel.send(Embed);
      }
    );
  },
}; 