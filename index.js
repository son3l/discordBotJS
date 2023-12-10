const {Client, GatewayIntentBits,Collection} = require('discord.js');
const { DisTube} = require('distube');
const { SoundCloudPlugin} = require('@distube/soundcloud')
const { SpotifyPlugin} = require('@distube/spotify')
const { YtDlpPlugin} = require('@distube/yt-dlp')
const {Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations} = GatewayIntentBits;
const {client_id} = require('./configuration/config.json')
const loadcommands = require('./utils/loadcommands')
 const bot = new Client({
    intents: [Guilds, GuildMessages, GuildVoiceStates, GuildIntegrations]
 });
 require('dotenv').config();
bot.commands = new Collection();
bot.aliases = new Collection();

bot.distube = new DisTube(bot, 
   {
      youtubeCookie: [
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947369,
   "hostOnly": false,
   "httpOnly": false,
   "name": "__Secure-1PAPISID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "Z9ZiEr-rtrUxEbtU/A8kuLSc9IhPt8914h",
   "id": 1
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947457,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-1PSID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "eAjvCAFz28ZQ5mMOZgMfWGgCuhiSIlddEaDstDuL7nxAScxOCMpBZcFsu_lCgCAlKnrt0w.",
   "id": 2
},
{
   "domain": ".youtube.com",
   "expirationDate": 1733738195.745366,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-1PSIDCC",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "ACA-OxMgZMMhOY7vlSr6uarR5vvMria-B_mnpcZw5_dfwqHbeZUxapKdKu9WVOqicvoGleb79g",
   "id": 3
},
{
   "domain": ".youtube.com",
   "expirationDate": 1733738164.65009,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-1PSIDTS",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "sidts-CjIBPVxjSqZ1o6Xe-pIVnoYcSy_Gle55X-nEiTCZkU05PXCWWI1tulLgl0xXM85yVGAYAhAA",
   "id": 4
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947385,
   "hostOnly": false,
   "httpOnly": false,
   "name": "__Secure-3PAPISID",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "Z9ZiEr-rtrUxEbtU/A8kuLSc9IhPt8914h",
   "id": 5
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947471,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-3PSID",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "eAjvCAFz28ZQ5mMOZgMfWGgCuhiSIlddEaDstDuL7nxAScxOEu7AADp53UQOAuowbCSxwA.",
   "id": 6
},
{
   "domain": ".youtube.com",
   "expirationDate": 1733738195.745387,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-3PSIDCC",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "ACA-OxNqrE2x9ymdGlZLUlUUucCgsw_9gJiwWL0TBB0cdw1trk3DRVtpSMUWqdbJE4Y_EcD1",
   "id": 7
},
{
   "domain": ".youtube.com",
   "expirationDate": 1733738164.650105,
   "hostOnly": false,
   "httpOnly": true,
   "name": "__Secure-3PSIDTS",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "sidts-CjIBPVxjSqZ1o6Xe-pIVnoYcSy_Gle55X-nEiTCZkU05PXCWWI1tulLgl0xXM85yVGAYAhAA",
   "id": 8
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947338,
   "hostOnly": false,
   "httpOnly": false,
   "name": "APISID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": false,
   "session": false,
   "storeId": "0",
   "value": "9-yA60a4Nv777rrC/AmUyMc8zOlptb0rXW",
   "id": 9
},
{
   "domain": ".youtube.com",
   "expirationDate": 1702202795,
   "hostOnly": false,
   "httpOnly": false,
   "name": "CONSISTENCY",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "AKreu9tLZaL1eaCdq02OLZ5r8hePEj3tuXnC_X1SALYXOGWqJi5GhUsg56PtdL77QP4SMVFhP4MoGMHhn4E5N51T",
   "id": 10
},
{
   "domain": ".youtube.com",
   "expirationDate": 1702203237.055286,
   "hostOnly": false,
   "httpOnly": true,
   "name": "GPS",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "1",
   "id": 11
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947267,
   "hostOnly": false,
   "httpOnly": true,
   "name": "HSID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": false,
   "session": false,
   "storeId": "0",
   "value": "ADQWChBBWfANLVzyI",
   "id": 12
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.239246,
   "hostOnly": false,
   "httpOnly": true,
   "name": "LOGIN_INFO",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "AFmmF2swRAIgLQAHubaSC-6ggI_joyerMCgVwttzS4oafILJTwygcKsCIFV_pyHq6YVkcmryBZnN2S18W01l9rZ4ogZk6yZURIih:QUQ3MjNmelh4bUt4OF9sMUFpWEdmM2xTcWpPNm5RaUh5NFlXcF9vME5kTWM5c0ZpMUVNdURRZGV6b0c4a0hIRGtRUDJod0ZTd3VjcEJFWGZBVEdsRkZoRmJBZkpnV0FKYVcxeno4cFBOLXYxeV8zNldNMzM0N0EzcDlqVWxhRlBRRmZmVDh2YmI0eGx3X3JwZU9IN2pvWjA4XzNMQ1pIN0FR",
   "id": 13
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762172.759062,
   "hostOnly": false,
   "httpOnly": false,
   "name": "PREF",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "f6=40000000&tz=Asia.Krasnoyarsk&f5=30000&f7=100",
   "id": 14
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947355,
   "hostOnly": false,
   "httpOnly": false,
   "name": "SAPISID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "Z9ZiEr-rtrUxEbtU/A8kuLSc9IhPt8914h",
   "id": 15
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947444,
   "hostOnly": false,
   "httpOnly": false,
   "name": "SID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": false,
   "session": false,
   "storeId": "0",
   "value": "eAjvCAFz28ZQ5mMOZgMfWGgCuhiSIlddEaDstDuL7nxAScxOYDT_SqB-ft0Um2d6Y_w_Xw.",
   "id": 16
},
{
   "domain": ".youtube.com",
   "expirationDate": 1733738195.745304,
   "hostOnly": false,
   "httpOnly": false,
   "name": "SIDCC",
   "path": "/",
   "sameSite": "unspecified",
   "secure": false,
   "session": false,
   "storeId": "0",
   "value": "ACA-OxMz_bZQBPtefSI_0z3BgjJ3ujdD18J6lrsVoirBqNHmvcGcWPgFwyVPZHZKVpNVM8h5Hg",
   "id": 17
},
{
   "domain": ".youtube.com",
   "expirationDate": 1736762167.947319,
   "hostOnly": false,
   "httpOnly": true,
   "name": "SSID",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "Aiat8OpncKXhvTLqu",
   "id": 18
},
{
   "domain": ".youtube.com",
   "expirationDate": 1717652886.461641,
   "hostOnly": false,
   "httpOnly": true,
   "name": "VISITOR_INFO1_LIVE",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "YvVNKQtoH0o",
   "id": 19
},
{
   "domain": ".youtube.com",
   "expirationDate": 1717652886.461652,
   "hostOnly": false,
   "httpOnly": true,
   "name": "VISITOR_PRIVACY_METADATA",
   "path": "/",
   "sameSite": "lax",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "CgJSVRICGgA%3D",
   "id": 20
},
{
   "domain": ".youtube.com",
   "hostOnly": false,
   "httpOnly": true,
   "name": "YSC",
   "path": "/",
   "sameSite": "no_restriction",
   "secure": true,
   "session": true,
   "storeId": "0",
   "value": "lRWzuZiE0yM",
   "id": 21
},
{
   "domain": ".youtube.com",
   "expirationDate": 1702202287.239258,
   "hostOnly": false,
   "httpOnly": true,
   "name": "YTSESSION-1b",
   "path": "/",
   "sameSite": "unspecified",
   "secure": true,
   "session": false,
   "storeId": "0",
   "value": "ANPz9KikD2XfPxbDlOSWJaM1AdBPj+vMqi1lCvzTyeP4iHjzo5avgZj+U2dDEtMdYGM7WxZvnmTUFaESiD5BgeOzM8nHNaBOdskQbTH/4e6c0KzzymQn8pqrmjMc/m/bwPY1Yc6ztz4Y",
   "id": 22
}
 ],
   leaveOnEmpty: false,
   leaveOnFinish: false,
   leaveOnStop: false,
   emitNewSongOnly: true,
   emitAddSongWhenCreatingQueue: false,
   emitAddListWhenCreatingQueue: false,
   nsfw: false,
   plugins:[
      new SpotifyPlugin({
         emitEventsAfterFetching: true,
      }),
      new SoundCloudPlugin(),
      new YtDlpPlugin({
         update: false,
      })
   ]
});
require('./utils/loadEvent')(bot);
require('./utils/loadDistubeEvents')(bot)
loadcommands(bot);

require('./utils/registerSlash')(bot,client_id,process.env.TOKEN)

bot.login(process.env.TOKEN)
