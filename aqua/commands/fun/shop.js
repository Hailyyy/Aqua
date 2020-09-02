const Discord = require("discord.js")
const client = new Discord.Client()
module.exports = {
    name: "shop",
    description: "view shop list",
    run: async (bot, message, args) => {

  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Shop List")
  .setDescription("To buy item you only provide the id. \nExample: -buy rod")
  .addField("item name", `\`\`\`ID: guitar\nCost: 2500\`\`\``)
  .addField("item name", `\`\`\`ID: PC\nCost: 3900\`\`\``)
  .addField("item name", `\`\`\`ID: Gold Watch\nCost: 4500\`\`\``)
  .addField("item name", `\`\`\`ID: Bugatti Veyron 🚗\nCost: 8500\`\`\``)
message.channel.send(embed)

 }
};
