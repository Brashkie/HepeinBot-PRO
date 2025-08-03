let media = 'https://qu.ax/ygTro.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ʟᴀꜱ ᴄᴜᴇɴᴛᴀꜱ ᴅᴇ ʜᴇᴘᴇɪɴ
■□■□■□■□■□■□■□■□■
━═▣ 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 ▣═━
${bot}
■□■□■□■□■□■□■□■□■
✅ *GITHUB*
*${md}*
■□■□■□■□■□■□■□■□■
✅ *INSTAGRAM - ASISTENCIA*
*${ig}*
■□■□■□■□■□■□■□■□■
✅ *YOUTUBE*
*${yt}*
■□■□■□■□■□■□■□■□■
✅ *FACEBOOK*
*${fb}*
■□■□■□■□■□■□■□■□■
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*`
await conn.sendButton(m.chat, str, wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', '/menu']], null, [
['𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢', md]], fkontak)}

handler.command = /^cuentasoficiales|hepeinig|cuentashb|cuentahb|accounts|hepeinaccounts|account|igbras|cuentasdebras|cuentasdehepeinbot|cuentahepeinbot|cuentashepeinbot$/i
handler.exp = 35
export default handler
