const {DistubeEmbedMassage} = require('../utils/function');
module.exports = (bot,queue)=>{
    const songs = {
        title: "Добавлена в очередь",
        desc: `${queue.name}`,
        //time: `${Date.parse(queue.formattedDuration)}`,
        thumbnail: `${queue.thumbnail}`,
        url:`${queue.url}`,
    };
    try {
        DistubeEmbedMassage(bot,songs);
    } catch (error) {
        console.log('Distube err ', error);
    }
}