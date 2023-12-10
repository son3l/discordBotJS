const {EmbedBuilder} = require('discord.js');
const { readdirSync} = require('fs');
function CommandsName(folders){
    const file = readdirSync(`${process.cwd()}/commands/${folders}`);
    const name = file.map(val=>val.split('.')[0]);
}
 function Music(bot){
    return new EmbedBuilder()
    .setTitle('Music '+CommandsName('music'.length))
    .setAuthor({
        name: bot.user.username,
        iconURL: bot.user.displayAvatarURL({size:1024, dynamic: true})
               })
    .setDescription(CommandsName('music').toString().replaceAll(',', ', '))
    .setColor('DarkButNotBlack');       
}
 function BotInfo(bot){
    return new EmbedBuilder()
    .setTitle('Info '+CommandsName('botinfo'.length))
    .setAuthor({
        name: bot.user.username,
        iconURL: bot.user.displayAvatarURL({size:1024, dynamic: true})
               })
    .setDescription(CommandsName('botinfo').toString().replaceAll(',', ', '))
    .setColor('DarkButNotBlack');       
 
}
 function Other(bot){
    return new EmbedBuilder()
    .setTitle('other '+CommandsName('other'.length))
    .setAuthor({
        name: bot.user.username,
        iconURL: bot.user.displayAvatarURL({size:1024, dynamic: true})
               })
    .setDescription(CommandsName('other').toString().replaceAll(',', ', '))
    .setColor('DarkButNotBlack');       
 
}
module.exports = {
Music, 
BotInfo,
Other
}