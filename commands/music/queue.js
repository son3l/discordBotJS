const { isVoiceChannel, TextEmbed } = require('../../utils/function');
const { EmbedBuilder } = require("discord.js");

module.exports.run = async (bot, interaction) => {
  try {
    if (!isVoiceChannel(interaction)) return;
    let index = 9;
    // interaction.deferReply();
    // interaction.deleteReply();

    const queue = bot.distube.getQueue(interaction);

    if (!queue) {
      TextEmbed(interaction, {
        title: "Нет песен в очереди",
        author: {
          name: `${bot.user.username}`,
          iconURL: bot.user.displayAvatarURL({ size: 1024, dynamic: true }),
        },
      });
      return;
    }

    const q = queue.songs
      .map(
        (song, i) =>
          `${i === 0 ? "Играет:" : `${i}.`} ${song.name} - \`${
            song.formattedDuration
          }\``
      )
      .join("\n");

    const embed = new EmbedBuilder()
      .setColor("DarkButNotBlack")
      .setTitle("Очередь")
      .setDescription(q);

    await interaction.reply({ embeds: [embed] });
    // TextEmbed(interaction, { title: "Queue!", desc: q });
  } catch (error) {
    console.log(error, "Error Queue");
  }
};

module.exports.config = {
  name: "queue",
  aliases: ["q"],
  description: "вывести список очереди",
};