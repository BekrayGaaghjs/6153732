const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("   **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {10
 message.channel.send(` **${args[0]} Adet Mesaj silindi. ✅**`).then(msg => msg.delete(1000));
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};