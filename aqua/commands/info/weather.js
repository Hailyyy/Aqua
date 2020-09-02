const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    timeout: 2000,
    description: "Checks a weather forecast",

    run: async(bot, message, args) =>{

    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location!')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location.');

        const current = result[0].current;
        const location = result[0].location;

        const weatherEmbed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}!**`)
        .setAuthor(`Weather statistics for ${current.observationpoint}.`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('**Timezone:**', `UTC+${location.timezone}`, true)
        .addField('**Degree Type:**', 'Celsius', true)
        .addField('**Temperature:**', `${current.temperature}°F`, true)
        .addField('**Wind:**', current.winddisplay, true)
        .addField('**Feels like:**', `${current.feelslike}°F`, true)
        .addField('**Humidity:**', `${current.humidity}%`, true)


        message.channel.send(weatherEmbed)

        })        
    }
}