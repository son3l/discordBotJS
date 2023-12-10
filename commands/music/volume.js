const { TextEmbed,isVoiceChannel } = require('../../utils/function');

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();
    let volume = interaction.options.get("громкость").value;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.setVolume(volume);
      TextEmbed(interaction, { title: `Громкость: ${volume}%`, desc: "" });
    }

  } catch (error) {
    console.log("Error volume: ", error);
  }
};

module.exports.config = {
  name: "volume",
  aliases: ["vol"],
  description: "изменить громкость музыки",
  options: [
    {
      name: "громкость",
      description: "громкость в процентах",
      type: 4,
      min_value: 0,
      max_value: 100,
      required: true,
    },
  ],
};