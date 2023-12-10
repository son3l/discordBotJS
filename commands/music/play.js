const {EmbedBuilder} = require('discord.js')
const {isVoiceChannel} = require('../../utils/function')

module.exports.run = async (bot, interaction)=>{
try {
    if(!isVoiceChannel(interaction)) return;
    const embed = new EmbedBuilder()
    .setTitle('Запрос обрабатывается')
    .setColor('DarkButNotBlack');
    await interaction.reply({embeds:[embed]});     
let voice = interaction.member.voice.channel;
let message = interaction.options.get('песня').value;
await bot.distube.play(voice,message,{
    textChannel: interaction.channel,
    member: interaction.member,
    interaction,
});   
} catch (error) {
   console.log(error) 
}
}
module.exports.config = {
    name: 'play',
    aliases: ['p'],
    description: 'воспроизвести песню',
    options:[{
        name: "песня",
        description: 'название песни',
        type: 3,
        required: true,
    }]
}