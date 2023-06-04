let handler = async (m, { conn, text, usedPrefix, command }) => {
  
var caption = `*Payment*\n\n*x* Dana: (belum)\n*x* Pulsa: 083188229366\n\n*Harga*:\n1 minggu 10k\n1 bulan 25k\n1 Tahun 50k\n\n*Owner*: http://wa.me/6283188229366`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: caption,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler