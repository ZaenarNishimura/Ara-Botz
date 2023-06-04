let handler = async m => {
let yy = `Zaky Ganteng`
let tt = `
Sc Ini Masih Bersifat Private!

Recode Sc : https://github.com/BOTCAHX/RTXZY-MD`

conn.sendMessage(m.chat, {
text: tt,
contextInfo: {
externalAdReply: {
title: yy,
body: '🤓',
thumbnailUrl: "https://telegra.ph/file/f8fe8aecdfc354366e9a0.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|esce)$/i

module.exports = handler
