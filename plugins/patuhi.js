let handler = async m => {
let fy = `FlyWorldServer`
let tt = `❯ http://wa.me/628318822936

Chat Wa Diatas,Dan Berikan Ssan Chatan Anda Daftar Di Bot Ini! ,Tunggu Balasan Dan Semoga Kamu Diterima 🥰`

conn.sendMessage(m.chat, {
text: tt,
contextInfo: {
externalAdReply: {
title: fy,
body: 'Terimakasih Sudah Membaca Syaratnya',
thumbnailUrl: "https://telegra.ph/file/f8fe8aecdfc354366e9a0.jpg",
sourceUrl: "http://wa.me/6283188229366",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

}
handler.help = ['flyworld']
handler.tags = ['info']
handler.command = /^(patuhi|flyworldpatuhi)$/i

module.exports = handler
