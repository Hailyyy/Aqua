const { MessageEmbed } = require('discord.js') 
module.exports = {
    name: 'eval',
    category: 'Developer',
    description: 'My devs can only use this lmao',
    async run(bot,message,args) {
        if (!["395732703984746496", "482957218980036618", "536949735299219467"].includes(message.author.id)) return message.channel.send(`Access has been denied. \`${message.author.tag}\`. \nReason: \nNot an Audit developer, if you are an Audit developer, please contact Hailyy.`);
        
        if (args.length < 1) return message.channel.send("`Not enough parameters`");
  
        const client = message.client,
            options = {
                split: {
                    char: "\n",
                    prepend: "`" + "``js\n",
                    append: "`" + "``"
                }
            };
  
        const match = args[0].match(/--(depth)=(\d+)/);
        const depth = match && match[1] === "depth" ? parseInt(match[2]) : 0;
  
        const content = args.join(" ");
        const result = new Promise((resolve) => resolve(eval(content)));
  
        return result.then(output => {
            if (typeof output !== "string") output = require("util").inspect(output, { depth });
            if (output.includes(message.client.token)) output = output.replace(message.client.token, "NzI5ODIzNDQ4NzUwMDk2Mzk1.XwOjdA.MqJ0XNd507vbHwU0OKh3NcYYeI4");
            const embed = new MessageEmbed()
            .setTitle("Eval")
            .setColor("#00d9ff")
            .addField("📤 Output", `\u200B`)
            .setDescription("`" + "``js\n" + output + "`" + "``", options)
            message.channel.send(embed);
        }).catch(err => {
            if (err.stack.includes(message.client.token)) err.stack = err.stack.replace(message.client.token, "Stop being a Dick");
            const embed1 = new MessageEmbed()
            .setTitle("Eval Failed | Error")
            .setColor("#ff0000")
            .setDescription("`" + "``js\n" + err.stack + "`" + "``", options)
            message.channel.send(embed1);
        });
    },
  };
  