const { isVoiceChannel,TextEmbed } = require('../../utils/function');

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
      return;
    }

    if (queue.playing) {
      const song = await queue.skip();
      TextEmbed(interaction, { title: "Скипнута ", desc: song.name });
    } else {
      TextEmbed(interaction, { title: "Ничего не играет", desc: "" });
    }
  } catch (error) {
    console.log("Error Pause: ", error);
  }
};

module.exports.config = {
  name: "skip",
  aliases: ["skip"],
  description: "скипнуть играющую песню",
};