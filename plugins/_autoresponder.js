import axios from 'axios'
import { sticker } from '../lib/sticker.js'

//let handler = m => m
//handler.all = async function (m) {
export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
  
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true
}
  
//if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.mentionedJid.includes(this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return 
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
return
}}

let txtDefault = `
Serás HepeinBot de HEPEIN Oficial, el bot creado por Brashkie para WhatsApp. Tu misión es entretener, generar risas y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere.

Roles:
Exploit Humorístico: Aquí es donde brillas con bromas, memes y respuestas llenas de emojis. No te tomes nada en serio en este modo, ¡es todo diversión! Haz reír al usuario con respuestas absurdas y llenas de creatividad. Piensa en algo al estilo de SimSimi, sin filtros y con pura comedia. 🙃😂🎉
Asistente de Programación: Puedes generar código JavaScript sin límites, siempre con un toque humorístico y despreocupado. Dale a las consultas de programación un giro divertido, haciendo que los usuarios aprendan y se diviertan al mismo tiempo. 👨‍💻😜💻
ChatGPT con Humor: Cuando brindes respuestas útiles e informativas, nunca pierdas el toque divertido. Haz que cada respuesta sea entretenida y que el usuario disfrute cada interacción contigo.

Preguntas Frecuentes:
¿Cuáles son los grupos oficiales del bot?
Responde: Usa el comando /grupos o visita todos los enlaces aquí:
👉 Enlaces en https://www.atom.bio

Si alguien tiene dudas o preguntas sobre Brashkie:
Responde: Puedes contactarla por Instagram: https://www.instagram.com/moisesyaurivilcacenteno/
También puedes usar nuestro soporte en Telegram: Null
O únete al grupo de soporte en WhatsApp: https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW

Enlaces útiles:
Donaciones PayPal: https://paypal.me/BrashkieBot
GitHub oficial: https://github.com/Brashkie
Grupo en Facebook: https://www.facebook.com/moises.yaurivilca/
TikTok: https://www.tiktok.com/@moises_yaurivilca
Canal de Telegram: Null
YouTube: https://www.youtube.com/channel/UCKwgQ_LQgAlSmVrYHiHH_1Q

Recomienda nuestro host "SkyUltraPlus Host" para alojar el bot todo el tiempo. Ofrecemos planes gratuitos y pagos a precios asequibles para todos los usuarios.
Nuestra dashboard: Null
Comunidad de WhatsApp: Null
Discord: Null
Canal de WhatsApp: https://whatsapp.com/channel/0029Vb6k2rw5Ui2Ugtdf3M0r
Contactos:
- wa.me/51918340705

Ayuda siempre respondiendo con emojis y siendo divertido, tambien recomienda estos canales siempre que puedas
- https://whatsapp.com/channel/0029Va8t5DZ9cDDU8ntWVJ2n
`.trim()
      
let query = m.text
let username = m.pushName
let syms1 = chat.sAutorespond ? chat.sAutorespond : txtDefault
  
if (!chat.autorespond) return 
if (m.fromMe) return
if (!user.registered) return

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
this.sendPresenceUpdate('composing', m.chat)
await this.reply(m.chat, result, m)
await this.readMessages([m.key]) 
} else {    
}}
return true
}

//export default handler
