const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "covid19",
  timeout: 3000,
  run: async (client, message, args) => {
    
    let url = 'https://corona.lmao.ninja/v2/all'
    let response = await axios.get(url)
    let corona = response.data
  
    console.log(corona)

    const embed = new MessageEmbed()
      .setTitle('**Total Coronavirus Cases World Wide**')
      .setColor('RANDOM')
      .setThumbnail('https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
      .setTimestamp()
      .addFields(
        {
          name: '**Total Cases:**',
          value: `${corona.cases.toLocaleString()}`,
          inline: true
        },
        {
          name: '**Total Deaths:**',
          value: `${corona.deaths.toLocaleString()}`,
          inline: true
        },
        {
          name: '**Total Recovered:**',
          value: `${corona.recovered.toLocaleString()}`,
          inline: true
        },
        {
          name: '**Active Cases:**',
          value: `${corona.active.toLocaleString()}`,
          inline: true
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: true
        },
        {
          name: '**Critical Cases:**',
          value: `${corona.critical.toLocaleString()}`,
          inline: true
        },
        {
          name: '**Today Recoveries:**',
          value: `${corona.todayRecovered.toLocaleString().replace("-", "")}`,
          inline: true
        },
        {
          name: '**Todays Deaths:**',
          value: `${corona.todayDeaths.toLocaleString()}`,
          inline: true
        },
        {
          name: '**Affected Countries**',
          value: `${corona.affectedCountries.toLocaleString()}`,
          inline: true
        }
      )

      message.channel.send(embed)
  },
};