const {isVoiceChannel, TextEmbed} = require('../../utils/function')

module.exports.run = async (bot, interaction) => {
    try {
      if (!isVoiceChannel(interaction)) return;
  
      const queue = bot.distube.getQueue(interaction);
  
      if (!queue) {
        TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
        return;
      }
      if (queue.playing) {
        TextEmbed(interaction, { title: `Текущая песня: ${queue.songs[0].name}, время: ${queue.currentTime}`, desc: "" });
      } else {
        TextEmbed(interaction, { title: "Ничего не играет", desc: "" });
      }
    } catch (error) {
      console.log("Error autoplay: ", error);
    }
  };
  
  module.exports.config = {
    name: "current",
    aliases: ["cu"],
    description: "вывести текущее время песни",
  };