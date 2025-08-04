let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
try {
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].limit += dmt
conn.reply(m.chat,  `╭━[ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 ]━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, m, {contextInfo: {mentionedJid: conn.parseMention(text)}})
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.group = true
handler.owner = true
export default handler
