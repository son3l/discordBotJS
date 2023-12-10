const { TextEmbed, isVoiceChannel } = require('../../utils/function');

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return;

    let message = interaction.options.get("повторение").value;
    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, { title: "Нет песен в очереди", desc: "" });
      return;
    }

    if (queue.playing) {
      mode = queue.setRepeatMode(parseInt(message) || 0);
      mode = mode ? (mode === 2 ? "Повторять очередь" : "Повторять песню") : "Выкл";
      TextEmbed(interaction, { title: `${mode}`, desc: "" });
    } else {
      TextEmbed(interaction, { title: "Ничего не играет", desc: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.config = {
  name: "loop",
  aliases: ["repeat"],
  description: "повторение песни/плейлиста",
  options: [
    {
      name: "повторение",
      choices: [
        {
          name: "песни",
          value: "1",
        },
        {
          name: "очереди",
          value: "2",
        },
        {
          name: "Выкл",
          value: "0",
        },
      ],
      description: "повторение песни/плейлиста",
      type: 3,
      required: true,
    },
  ],
};