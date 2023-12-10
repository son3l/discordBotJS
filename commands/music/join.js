const {isVoiceChannel, TextEmbed} = require('../../utils/function')

module.exports.run = async (bot, interaction)=>{
try {
    let voice = interaction.member.voice.channel;
    if(isVoiceChannel(interaction)) 
{
bot.distube.voices.join(voice);
TextEmbed(interaction, { title: `Зашел  ${bot.user.username}`, desc: "" });
}
else {
    TextEmbed(interaction, { title: 'Для вызова необходимо быть в войсе', desc: "" });
}
} catch (error) {
   console.log(error) 
}
}
module.exports.config = {
    name: 'join',
    aliases: ['j'],
    description: 'пригласить бота в войс',
}