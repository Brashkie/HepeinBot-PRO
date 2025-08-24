//Implementado por BrashkieBot

import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `╭═══《𖣐 HEPEIN BOT 𖣐》═══⊷❍
┃𒁈╭──────────────
┃𒁈│ 《 𖣐 _ᴏᴡɴᴇʀs ᴏғᴄ_ 𖣐 》
┃𒁈│ 
┃𒁈│ _Brashkie_
┃𒁈│
┃𒁈│    ║▌│█║▌│█║▌│█│║▌║
┃𒁈│    ║▌│█║▌│█║▌│█│║▌║
┃𒁈│
┃𒁈│ Hepein ʙᴏᴛ x Hepein 
┃𒁈╰───────────────
╰═════════════════⊷

(つ▀¯▀)つ━━━━━━━━━
Hola *${name}* | by Hepein Oficial
•═══◇◇•◇◇∘◇◇•◇◇═══•
Si desea ver menu completo pon 
> #menuall
(つ▀¯▀)つ━━━━━━━━━


 ══《☬ ACTION ☬》══
Para ver los comandos de acción
> #action

 ══《☬ ANIMALS ☬》══
Para ver los comandos de animales
> #animals

 ══《☬ ANIME ☬》══
Para ver los comandos de anime o otros
> #animeb

 ══《☬ BIRTHDAY ☬》══
Para ver los comandos de anime o otros
> #mbirthday

 ══《☬ CLUB ☬》══
Para ver los comandos de club
> #club

 ══《☬ CONFIG ☬》══
Para ver los comandos de configuración para grupos
> #config

 ══《☬ CURRENCY ☬》══
Para ver los comandos de moneda
> #currency

 ══《☬ FUN ☬》══
Para ver los comandos de diversión
> #fun

 ══《☬ INFO ☬》══
Para ver los comandos de información
> #info

 ══《☬ MANAGE ☬》══
Para ver los comandos de administrador
> #manager

 ══《☬ MARRIAGE ☬》══
Para ver los comandos de matrimonio
> #marriage

 ══《☬ MISC ☬》══
Para ver los comandos de jugadores de MC
> #misc

 ══《☬ MOD ☬》══
Para ver los comandos de moderador
> #mod

 ══《☬ MUSIC ☬》══
Para ver los comandos de música
> #musicc

 ══《☬ ROLEPLAY ☬》══
Para ver los comandos de reacción
> #reaction

 ══《☬ UTILITY ☬》══
Para ver los comandos de utilidad
> #utility

 ══《☬ SETTINGS ☬》══
Para ver los comandos de configuracion
> #settings

 ══《☬ NSFW ☬》══
Para ver los comandos de +18
> #nsfw

 ══《☬ UTILITY 2 ☬》══
Para ver los comandos de otros
> #utility2

 ══《☬ TOOLS ☬》══
Para ver los comandos de herramientas
> #tools
`.trim()
const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4',
'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4',
'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|help|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
