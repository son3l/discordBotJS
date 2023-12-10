const {EmbedBuilder, time} = require('discord.js')
const embed = new EmbedBuilder()
function DistubeEmbedMassage(interaction, object){
object?.title && embed.setTitle(object?.title);
object?.desc && embed.setDescription(object?.desc);
object?.time && embed.setTimestamp(object?.time);
object?.image && embed.setImage(object?.image);
object?.author && embed.setAuthor(object?.author);
object?.thumbnail && embed.setThumbnail(object?.thumbnail);
object?.url && embed.setURL(object?.url);
embed.setColor('DarkButNotBlack');
interaction.textChannel.send({embeds:[embed]});
}

async function TextEmbed(interaction, object) {
    const embed = {
      title: object.title || "",
      description: object.desc || "",
      timestamp: object.time,
      Author: object.author || "",
      color: 15110828,
    };
    interaction.reply({embeds:[embed]})
}

function isVoiceChannel(interaction){
try {
    const member = interaction.member.voice.channel;
    if(!member) 
    interaction.reply('Для вызова необходимо быть в войсе')
else return true;
} catch (error) {
    console.log(error);
}
}
module.exports = {DistubeEmbedMassage,isVoiceChannel, TextEmbed};