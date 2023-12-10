const {readdirSync} = require('fs');


module.exports = function (bot){
    let commandArray = [];
readdirSync(`${process.cwd()}/commands`).forEach((folders)=>{
    const file = readdirSync(`${process.cwd()}/commands/${folders}`).filter((files)=>{
        return files.endsWith('.js');
    }
    );
for (let commandname of file){
    const command = require(`${process.cwd()}/commands/${folders}/${commandname}`);
    if (!commandname) return;
    commandArray.push(command.config);
    bot.commands.set(command.config.name, command)
}
});

bot.command = commandArray;

}