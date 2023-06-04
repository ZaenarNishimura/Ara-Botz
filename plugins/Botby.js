let handler = async m => {
let tu = `ʙᴏᴛ ʙʏ ᴢᴀᴋʏᴢᴊ`
let tt = `
ʙᴏᴛ ɪɴɪ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ᴢᴀᴋʏ ᴜɴᴛᴜᴋ ɪɴғᴏ sᴇʟᴇɴɢᴋᴀᴘɴʏᴀ ᴛᴇɴᴛᴀɴɢ ᴏᴡɴᴇʀ ᴋᴜ ᴅɪʙᴀᴡᴀʜ ɪɴɪ.. 

📁 𝐍𝐚𝐦𝐚: Jaenar(Zaky)
🌐 𝐓𝐢𝐧𝐠𝐠𝐚𝐥: Jawa Barat, Karawang
📒 𝐇𝐨𝐛𝐲: Ngegame, Ngecoding
🤓𝐏𝐫𝐢𝐛𝐚𝐝𝐢: Menyenangkan💯

ᴋᴇᴛɪᴋ .owner ᴜɴᴛᴜᴋ ʙᴇʀᴛᴀɴʏᴀ ᴛᴀɴʏᴀ ᴀᴛᴀᴜ ᴍᴇɴᴀɴʏᴀᴋᴀɴ ᴅʟʟ
`

conn.sendMessage(m.chat, {
text: tt,
contextInfo: {
externalAdReply: {
title: tu,
body: 'Owner Zaky Ganteng',
thumbnailUrl: "https://telegra.ph/file/f7b5b5c5f81c01dbbedd6.jpg",
sourceUrl: "http://wa.me/6283188229366",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(botby|botby)$/i

module.exports = handler
