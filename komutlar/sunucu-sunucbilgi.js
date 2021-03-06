const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.MessageEmbed()
   .setColor("YELLOW")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL())
   .addField('Sunucu İsimi kısaltması:', message.guild.nameAcronym, true)
   .addField('Kimliği:', message.guild.id, true)
   .addField('Bölgesi:', message.guild.region, true)
   .addField('Sahibi:', message.guild.owner, true)
   .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
   .addField('Üyeler:', `${message.guild.members.cache.filter( member => member.user.bot).size} bot | ${message.guild.memberCount} üye`, true)
   .addField('Roller:', message.guild.roles.cache.map(role => role.name).join(', '), true)
   .addField('Kanallar:', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} metin`, true)
   .addField('AFK kanalı:', message.guild.afkChannel, true)
   .addField('AFK zaman aşımı:', message.guild.afkTimeout, true)
   .addField('Oluşturma tarihi:', message.guild.createdAt, true)
   .setFooter('Sunucunun Bilgileri', message.guild.iconURL())
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };

exports.config = {
  name: 'sunucubilgi',
  aliases: ['sunucubilgi']
};