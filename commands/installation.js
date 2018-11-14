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
    .setTitle('Modpack Installation Guide')
    .setDescription('1. Download the Technic Launcher [https://www.technicpack.net/download] and install it.\n2. Enter in your Minecraft Account details and login to the launcher.\n3. At the top of the launcher select the Modpacks tab.\n4. At the top of the window type in the text box: Harmony Hollow.\n5. Select Install and wait until Modpack is installed and the button has been changed to Play.\n6. When the Modpack is installed and the button displays Play, press Play to launch the Harmony Hollow Modpack.')
  message.channel.send(embed);
  return
};

module.exports.help = {
  name: 'installation',
  description: 'This is a guide that can help you install the Harmony Hollow Pack.',
  usage: `installation`
};
