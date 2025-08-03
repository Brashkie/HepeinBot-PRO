import '../plugins/_content.js'
//let handler = m => m 
//handler.all = async function (m) {
import { perplexity } from '../lib/chatgpt.js'
const antiSpam = new Map();
export async function before(m, { conn }) {
if (m.id.startsWith('NJX-') || m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20 || m.id.startsWith('FizzxyTheGreat-')) return
let setting = global.db.data.settings[this.user.jid]
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
if (m.fromMe) return
 
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓*`, `Aqui estoy `, `*Hola Aqui estoy yo puedo ayudar?*`])}`.trim()
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con HepeinBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de HepeinBot y CorinPlus Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
Null

*🟢 Dashboard:*
Null

⚙️ *Panel*
Null

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW

*🟣 Discord:*
Null

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029Va8t5DZ9cDDU8ntWVJ2n

🗣📲 *Contacto:*
• wa.me/51916360161

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 

if (/^infohost$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363418980254537@newsletter', 
serverMessageId: '', 
newsletterName: '𒁈 ꜱᴘᴀᴍ ʙᴏᴛ 𒁈' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐒𝐊𝐘𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `¡El plus que necesitas!_`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/sMeCo.jpg', 
sourceUrl: accountshb}}},
{ quoted: fkontak})
} 
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
} else if (/^simi$/i.test(m.text)) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}ESCRIBA UN TEXTO PARA HABLAR CONMIGO\n\nEJEMPLO\n*Hola Brashkie Bot.*`, m);
} else if (m.text.includes(`bot`) || m.text.includes(`Bot`) || m.text.includes(`simsimi`) || m.text.includes(`simi`) || m.text.includes(`hepeinbot`) || m.text.includes(`alexa`)) {   
//if (/^(bot|Bot|simi|simsimi|alexa)\s.+$/i.test(m.text)) {
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') || m.text.includes('infobot')) return;
const lastMessageTime = antiSpam.get(m.sender) || 0;
const currentTime = Date.now();
if (currentTime - lastMessageTime < 5000) throw !0; 

if (/^Quiero un bot|como obtengo un bot?|Quiero un bot?|quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
return conn.reply(m.chat,  `\`⚡¿Quieres un bot para tu grupo?\`

*🐈 Tiene varias opciones. Puedes instalarlo tú mismo siguiendo los pasos de instalación:*
* #instalarbot

*🧡 Puede hacerte un sub bot mandando el siguiente comando:*
* #serbot (escanea el QR) 
* #jadibot --code (Código de 8 dígitos)

*💖 Puedes solicitarlo haciendo una donación voluntaria a través de PayPal o Mercado Pago arg.*

> 🚀 El bot estará activo 24/7 para tu grupo.

\`⚡ ¿Por dónde puedo donar?\`
> A través de nuestro PayPal o Mercado Pago.

*❇️PayPal:*
• https://paypal.me/BrashkieBot

*❇️Mercado pago:*

*• Alias :* Oficial Hepein
*• CVU :* Null

\`⏩ Siguiente paso ⏩\`

> Una vez realizado el pago, puedes enviar un comprobante de envío del dinero (captura de pantalla) para que pueda agregar el bot a tu grupo:

• https://chat.whatsapp.com/JyPIlLE4gPg9XJkbUhBhHf
• ${ig}
• https://www.facebook.com/moises.yaurivilca/

\`⚡ ¿El bot estará activo 24/7?\`
_*Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento) 💞*_

> *𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙨𝙪𝙨 𝙥𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨 𝙚𝙣 ${gt} 🐈💞*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: BrasImg, sourceUrl: accountshb }}})
}
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
return conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

𒁈 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 𒁈`, m)
}  
try {
let prefixRegex = new RegExp('^[' + setting.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']');
let hasPrefixWithKeyword = prefixRegex.test(m.text) && (m.text.match(/^[‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-](bot|Bot|simsimi|simi|alexa|hepeinbot)/));
let hasKeywordWithoutPrefix = (m.text.includes('bot') || m.text.includes('Bot') || m.text.includes('simsimi') || m.text.includes('simi') || m.text.includes('hepeinbot') || m.text.includes('alexa')) && !prefixRegex.test(m.text);
if (!hasPrefixWithKeyword && !hasKeywordWithoutPrefix) return;
let query = m.text;
if (hasPrefixWithKeyword) {
query = m.text.replace(prefixRegex, '').replace(/(bot|Bot|simsimi|simi|hepeinbot|alexa)/i, '').trim(); 
} else if (hasKeywordWithoutPrefix) {
const keywordRegex = /^(bot|Bot|simsimi|simi|hepeinbot|alexa)\s+/i;
if (keywordRegex.test(m.text)) {
query = m.text.replace(keywordRegex, '').trim();
} else {
query = m.text.trim();
}}
if (!query) return;

await conn.sendPresenceUpdate('composing', m.chat)
antiSpam.set(m.sender, currentTime);
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

async function perplexityIA(q, logic) {
try {
let response = await perplexity.chat([{ role: 'system', content: logic || syms1 }, { role: 'user', content: q }], 'sonar-pro');
if (response.status) {
return response.result.response;
} else {
throw new Error(`Error en Perplexity: ${response.result.error}`);
}} catch (error) {
console.error('Error en Perplexity:', error);
return
}}
    
async function SimSimi(text, language = 'es') {
try {
const { data } = await axios.post("https://api.simsimi.vn/v1/simtalk", new URLSearchParams({
text,
lc: language }).toString(), {
headers: {'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }});
return data.message;
} catch (error) {
console.error(error);
return
}}

let username = `${m.pushName}`;
let syms1 = `Serás HepeinBot de HEPEIN Oficial, el bot creado por Brashkie para WhatsApp. Tu misión es entretener, generar risas y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere. tiene este rol que chat divertido con exploit incluido osea los quiere dices es que este rol solo es humor, divertido, no que tome nada real, tu respuesta sera divertida, humor, y usar mucho emojis el tu respuesta.

"general risa el chat por que este rol actúal más como simsimi" Chatbot no chatgpt. 

los quiere dices que tu respuesta sera humor puro, risa, memes.`;  

let result;
if (!result || result.trim().length === 0) {
result = await perplexityIA(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await SimSimi(query);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1);
result = result.replace(/Maaf, terjadi kesalahan saat memproses permintaan Anda/g, '').trim();
result = result.replace(/Generated by BLACKBOX\.AI.*?https:\/\/www\.blackbox\.ai/g, '').trim();
result = result.replace(/and for API requests replace https:\/\/www\.blackbox\.ai with https:\/\/api\.blackbox\.ai/g, '').trim();
}

if (result && result.trim().length > 0) {
await conn.reply(m.chat, result, m);
antiSpam.set(m.sender, currentTime);
}} catch (e) {
try {
let gpt = await fetch(`${apis}/tools/simi?text=${m.text}`);
let res = await gpt.json();
await m.reply(res.data.message);
antiSpam.set(m.sender, Date.now());
} catch (e) {
return m.reply([`Simsimi esta durmiendo no molesta 🥱`, `Callarte`, `Api simsimi caida`, `Simsimi no estas`, `NO MOLESTA`, `No hay señar`, `No estoy disponible`].getRandom());
console.log(e);
}}}

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}


if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘  𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀  〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)
}
return !0 
}
//export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

