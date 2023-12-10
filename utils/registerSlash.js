const {REST, Routes} = require('discord.js')
module.exports = async (bot, client_id,TOKEN)=>{
const rest = new REST({version:'10'}).setToken(TOKEN);
try {

    const commands = await bot.command;
    if(!commands||commands===undefined) return;
console.log(commands)
    console.log('started refreshing application (/) commands');
  await rest.put(Routes.applicationCommands(client_id), {body: commands});
    console.log('successfull reload application (/) commands');
} catch (error) {
    console.log(error);
}

}
