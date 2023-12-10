const fs = require('fs')
module.exports = (bot) =>{
fs.readdir('events/',(error,files)=>{
files.forEach((file)=>{
    try {
     
    if(!file.endsWith('.js')) return;
    const event = require(`../events/${file}`);
    let eventName = file.split('.')[0];
    bot.on(eventName,event.bind(null,bot));
    delete require.cache[require.resolve(`../events/${file}`)]
   
    } catch (error) {
console.log(error);        
    }})
})
}