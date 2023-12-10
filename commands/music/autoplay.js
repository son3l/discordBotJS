const {isVoiceChannel, TextEmbed} = require('../../utils/function')

module.exports.run = async (bot, interaction) => {
    try {
      if (!isVoiceChannel(interaction)) return;
  
      const queue = bot.distube.getQueue(interaction);
  
      if (!queue) {
        TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
        return;
      }
  
      const autoplay = queue.toggleAutoplay(interaction);
  
      TextEmbed(interaction, {
        title: `Автовоспроизведение: ${autoplay ? "Вкл" : "Выкл"}`,
        desc: "",
      });
    } catch (error) {
      console.log("Error autoplay: ", error);
    }
  };
  
  module.exports.config = {
    name: "autoplay",
    aliases: ["ap"],
    description: "автоматический поиск некст песен",
  };