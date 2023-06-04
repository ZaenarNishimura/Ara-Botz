
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.lannn.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6283188229366']  
global.mods = ['6283188229366'] 
global.prems = ['6283188229366']
global.nameowner = 'ZakyZJ'
global.numberowner = '6283188229366' 
global.mail = 'flyworldsmp@gmail.com' 
global.dana = '6283188229366'
global.pulsa = '6283188229366'
global.gopay = '6283188229366'
global.namebot = 'FlyBotz'
global.gc = 'https://chat.whatsapp.com/KjH8v3mYz16LfN7GlpFpvf'
global.web = 'https://github.com/ZakyZJ'
global.instagram = 'https://instagram.com/zakyzj'
global.wm = '© FlyBotz'
global.watermark = wm
global.wm2 = '⫹⫺ FlyBotz'
global.wm3 = '© FlyBotz'
global.wm4 = '© FlyBotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'
global.alpiskey = '8ecfc216' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'YOURKEY' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'trial' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.lannn.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOURKEY' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
