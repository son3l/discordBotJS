const {isVoiceChannel, TextEmbed} = require('../../utils/function')

module.exports.run = async (bot, interaction)=>{
try {
    if(!isVoiceChannel(interaction)) return;
    bot.distube.voices.leave(interaction);
    TextEmbed(interaction, { title: "Бот вышел из войса", desc: "" });
} catch (error) {
   console.log(error) 
}
}
module.exports.config = {
    name: 'leave',
    aliases: ['le'],
    description: 'покинуть войс',
}