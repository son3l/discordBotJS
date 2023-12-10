const {permissions} = require('../configuration/config.json');
const {BotInfo, Music, Other} = require('../configuration/help')

module.exports = async (bot, interaction) =>{
try {
    if(interaction.isSelectMenu) {
if (interaction.customId === 'help')
{
    switch (interaction.values[0]){
        case 'music':
            await interaction.reply({
                embeds: [Music(bot)],
                ephemeral: true,
            })
            break;
            case 'botinfo':
                await interaction.reply({
                    embeds: [BotInfo(bot)],
                    ephemeral: true,
                })
                break;
                case 'other':
                    await interaction.reply({
                        embeds: [Other(bot)],
                        ephemeral: true,
                    })
                    break;
            
                }
            }
        }
    if(!interaction.isChatInputCommand()) return;

    const {sendMessage, VoiceJoin} = permissions;
    const messageSendPerm = interaction.member.permissions.has(sendMessage);
    const joinVoicePerm = interaction.member.permissions.has(VoiceJoin);
    if(!messageSendPerm){
        await interaction.reply('you dont have permissions');
    return;
    }
    const commandFile = bot.commands.get(interaction.commandName);
    if (!commandFile)
{
    await interaction.reply('dont find function');
    return ;
}
commandFile.run(bot,interaction);
} catch (error) {
 console.log(error)   
}
}