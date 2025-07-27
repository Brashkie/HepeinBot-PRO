import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
if (user.registered === true) throw `🫂 *Ya estas registrado, para volver a registrarte, usa el comando: #unreg*`
if (!Reg.test(text)) throw `🥷 *El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n!reg nombre.edad\n\nEjemplo: !reg ${name2}.21`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '☘️ *No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
if (!age) throw '🪴 *No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
if (name.length >= 30) throw '💫 *El nombre no debe de tener mas de 30 caracteres.*' 
age = parseInt(age)
if (age > 999) throw '*😏 Viejo/a Sabroso/a*'
if (age < 5) throw '🥷 *Ven aquí, te adoptare!!*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 3
global.db.data.users[m.sender].diamond += 7
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
//m.react('✅️') 
let regbot = `🥷 *R E G I S T R A D O* 🥷
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
✨️ Nombre: ${name}
🧃 Edad: ${age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
🎁 Recompensas:
• 7 Diamantes 💎
• 5 KatashiCoins 💰
• 150 Experiencia 💸
• 3 Tokens 🪙
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•`
conn.sendMessage(m.chat, {
text: regbot,
contextInfo: {
externalAdReply: {
title: '✅ REGISTRADO ✅️',
body: wm, 
thumbnaiUrl: global.BrasImg, 
sourceUrl: global.canales,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
}}}, { quoted: m })
await m.reply(`${sn}`)        
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
