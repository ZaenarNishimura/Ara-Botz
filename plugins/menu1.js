let handler = async m => {
let tu = `Ketik .allmenu Untuk Menampilan Semua Menu`
let tt = `
ʜᴀʟᴏ ɪ'ᴍ ᴀʀᴀʙᴏᴛᴢ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ
ᴅɪ ʙᴏᴛ ɪɴɪ ᴋᴀʟɪᴀɴ ʙɪsᴀ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴄᴋᴇʀ ᴅʟʟ..

ʙᴏᴛ ɪɴɪ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ᴏᴡɴᴇʀ ᴋᴀᴍɪ ᴢᴀᴋʏ
ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʟɪsᴛ ᴍᴇɴᴜ ʙɪsᴀ ᴋᴇᴛɪᴋ
.allmenu`

conn.sendMessage(m.chat, {
text: tt,
contextInfo: {
externalAdReply: {
title: tu,
body: 'AraBotzV2',
thumbnailUrl: "https://telegra.ph/file/f7b5b5c5f81c01dbbedd6.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(menu)$/i

module.exports = handler
