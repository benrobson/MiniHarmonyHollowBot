const Discord = require('discord.js');
const config = require('../config.json');
const superagent = require('superagent');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  if (args == 'help') {
      let embed = new Discord.RichEmbed()
      .setTitle(`${module.exports.help.name} Command Information`)
      .setDescription(`${module.exports.help.description}`)
      .addField('Usage', `${config.prefix}${module.exports.help.usage}`, true)
      .setColor(config.cyan)
      message.channel.send(embed);
      return
    };

  let {body} = await superagent
  .get('http://mcapi.us/server/status?ip=' + process.env.minecraftserveraddress);
  let status = body.online ? "✅" : "❎";

  let embed = new Discord.RichEmbed()
  .setTitle(`Server Status`)
  .setThumbnail('https://i.imgur.com/CgTz78K.png')
  .setColor(body.online ? config.green : config.red)
  .addField('Server Online', status)
  .addField('Players On', body.players.now, true)
  .addField('Max Players', body.players.max, true);
  message.channel.send(embed);

  console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} requested the Minecraft Server status.`);
  return
};

module.exports.help = {
  name: 'status',
  description: 'Display the current status of the server to the user.',
  usage: 'status'
};
