const {DistubeEmbedMassage} = require('../utils/function');
module.exports = (bot,queue,song)=>{
const songs = {
    title:"Сейчас играет",
    desc: `${queue.name}`,
    //time: `${Date.parse(queue.formattedDuration)}`,
    thumbnail: `${queue.thumbnail}`,
    url:`${queue.url}`,
};
try {
    DistubeEmbedMassage(bot,songs)
} catch (error) {
    console.log(error);
}
}