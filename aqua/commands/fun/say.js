module.exports = {
    name: "say",
    description: "Get the bot to say what ever you want!",
    usage: "<msg>",
    run: async (bot, message, args) => {
      
      let MSG = message.content.split(`;say`).join("");
      message.delete();
      if (!MSG)
        return message.channel.send(`Hey! Please state some text so I can say it!`);
      message.channel.send(MSG);
    },
  };