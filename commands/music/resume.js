const { TextEmbed, isVoiceChannel } = require('../../utils/function');

module.exports.run = async (bot, interaction)=>{
    try {
        if (!isVoiceChannel(interaction)) return;
    
        // interaction.deferReply();
        // interaction.deleteReply();
    
        const queue = bot.distube.getQueue(interaction);
    
        if (!queue) {
            TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
          return;
        }
    
        if (!queue.playing) {
          queue.resume(interaction);
          TextEmbed(interaction, { title: "Возобновление воспроизведения", desc: "" });
        } else {
          TextEmbed(interaction, { title: "Уже воспроизводится", desc: "" });
        }
      } catch (error) {
        console.log(error);
      }
    };
module.exports.config = {
    name: 'resume',
    aliases: ['re'],
    description: 'возобновить воспроизведение',
}