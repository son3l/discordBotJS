const {Activity} = require('discord.js');
/*
* @param {any} client
*
*
*
*/
module.exports = (client)=>{
client.user.setActivity('твоем очке',{
    type: Activity.Playing,
});
console.log(`logged in as ${client.user.tag}!`)
};