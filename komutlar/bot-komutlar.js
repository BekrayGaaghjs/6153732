const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Chingle Bot  - Komut Sayısı`)
    .setDescription('**\n Chingle  | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("YELLOW")
    .setThumbnail('')
    .setTimestamp()
    .setFooter("Chingle Bot | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

