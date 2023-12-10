const {isVoiceChannel, TextEmbed} = require('../../utils/function')

module.exports.run = async (bot, interaction)=>{
try {
    if(!isVoiceChannel(interaction)) return;
    const queue = bot.distube.getQueue(interaction);

    if (!queue)
    {
        interaction.reply('Нет песен в очереди');
        return;
    }
    if (queue.playing){
    queue.stop(interaction);
    TextEmbed(interaction, { title: "Музыка приостановлена", desc: "" });
} else {
  TextEmbed(interaction, { title: "Ничего не играет", desc: "" });}
} catch (error) {
   console.log(error) 
}
}
module.exports.config = {
    name: 'stop',
    aliases: ['st'],
    description: 'остановить воспроизведение музыки',
}