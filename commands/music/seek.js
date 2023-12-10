const { TextEmbed,isVoiceChannel } = require('../../utils/function');
module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return;

    // interaction.deferReply();
    // interaction.deleteReply();
    let time = interaction.options.get("время").value;

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
      return;
    }

    if (queue.playing) {
      queue.seek(time);
      TextEmbed(interaction, { title: `Перемотано на: ${time} секунд`, desc: "" });
    } else {
      TextEmbed(interaction, { title: `Ничего не играет`, desc: "" });
    }
  } catch (error) {
    console.log("Error Seek: ", error);
  }
};

module.exports.config = {
  name: "seek",
  aliases: ["seek"],
  description: "перемотать трек до определенного времени",
  options: [
    {
      name: "время",
      description: "время в секундах",
      type: 4,
      min_value: 0,
      required: true,
    },
  ],
};