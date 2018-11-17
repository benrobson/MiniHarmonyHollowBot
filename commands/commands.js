const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  if (args == 'help') {
    let embed = new Discord.RichEmbed()
      .setTitle(`${module.exports.help.name} Command Information`)
      .setDescription(`${module.exports.help.description}`)
      .addField('Usage', `${config.prefix}${module.exports.help.usage}`)
      .setColor(config.cyan)
    message.channel.send(embed);
    return
  };

  let embed = new Discord.RichEmbed()
    .setTitle('Commands')
    .setDescription('All of the commands that I can do are listed here.')
    .addField('guide', 'A command that allows you to list all guides avaliable.')
    .addField('information', 'Gives the user information about development and the Mod List.')
    .addField('status', 'Display the current status of the server.')
  message.channel.send(embed);
  return
};

module.exports.help = {
  name: 'commands',
  description: 'List all commands that this bot has to offer.',
  usage: `commands`
};
