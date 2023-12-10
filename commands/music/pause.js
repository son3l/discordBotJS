const { isVoiceChannel,TextEmbed } = require("../../utils/function");
module.exports.run = (bot, interaction)=>{
    try{
    if (!isVoiceChannel(interaction)) return;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.pause(interaction);
      TextEmbed(interaction, { title: "Приостановлено воспроизведение", desc: "" });
    } else {
      TextEmbed(interaction, { title: "Ничего не играет", desc: "" });
    }
} catch (error) {
    console.log("Error Pause: ", error);
  }
}


module.exports.config = {
    name: 'pause',
    aliases: ['pa'],
    description: 'приостановить воспроизведение музыки',
}