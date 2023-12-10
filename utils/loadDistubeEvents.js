const fs = require('fs');
module.exports = (bot)=>{
try {
    fs.readdir('distube/', (err,files)=>{
files.forEach(file=>{
    if(!file.endsWith('.js')) return;
    const event = require('../distube/'+file);
    let eventName = file.split('.')[0];
    bot.distube.on(eventName, event.bind(bot));
    delete require.cache[require.resolve(`../distube/${file}`)];
})
    })
} catch (error) {
    console.log(erorr);
}
}