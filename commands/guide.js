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

  if (args == 'list') {
    let embed = new Discord.RichEmbed()
      .setTitle(`List of all Guides`)
      .addField('installation', `This guide will help you to download the Technic Launcher and launch the modpack.`)
      .addField('memory', `This guide will assist and help you in allocating more memory to your Technic Launcher.`)
      .setColor(config.cyan)
    message.channel.send(embed);
    return
  };

  if (args == 'installation') {
    let embed = new Discord.RichEmbed()
      .setTitle('Modpack Installation Guide')
      .setThumbnail('https://theme.zdassets.com/theme_assets/646263/b26a053b1a803ec41d3aa316adb534b82442757f.png')
      .setDescription('1. Download the Technic Launcher [https://www.technicpack.net/download] and install it.\n2. Enter in your Minecraft Account details and login to the launcher.\n3. At the top of the launcher select the Modpacks tab.\n4. At the top of the window type in the text box: Harmony Hollow.\n5. Select Install and wait until Modpack is installed and the button has been changed to Play.\n6. When the Modpack is installed and the button displays Play, press Play to launch the Harmony Hollow Modpack.')
    message.channel.send(embed);
    return
  };

  if (args == 'memory') {
    let embed = new Discord.RichEmbed()
      .setTitle('Allocating Memory Guide')
      .setThumbnail('https://theme.zdassets.com/theme_assets/646263/b26a053b1a803ec41d3aa316adb534b82442757f.png')
      .setDescription('Are you randomly crashing in game? (E.g. Minecraft ran out of memory).\nThis may be because you haven’t allocated enough RAM to Technic.\n\n1. Install a version of Java 8 from here [https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html]\nSo what you are going to have to do is select your operating system E.G. Windows, Linux, Mac OS. You will also have to check whether your Windows is 64 bit or 32 bit (If you are running on Windows).\nYou can do this by going to your files and right clicking "This PC" and it will show under system type.\n2. So once you have installed Java you are going to want to go to your Technic launcher and click "Launcher Options" [https://gyazo.com/ffcb9bd112e11b2b8465557bc6c2cd0a]\n3. Select "Java Settings" [https://gyazo.com/e32e40a251d8aeb61e20f5feba0bff0c]\n4. Choose your new version of Java [https://gyazo.com/86a6f955f62be5751dbb234fe74ae10c]\n I recommend that you only allocate around 2-3GB depending on how much RAM [or memory] you have on your PC. Having too much ram allocated can also cause crashes and for your CPU to overwork itself.\nYou may need to do some testing and adjusting to the amount of memory to allocate.')
    message.channel.send(embed);
    return
  };
};

module.exports.help = {
  name: 'guide',
  description: 'A command that allows you to list all guides avaliable.',
  usage: `guide [args]`
};
