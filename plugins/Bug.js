let handler = async m => {
  
let tt = `http://wa.me/settings`
m.reply(tt)

}
handler.help = ['Bug Ini Bahaya!!']
handler.tags = ['Owner']
handler.command = /^(bug|bug)$/i

handler.owner = true

module.exports = handler
