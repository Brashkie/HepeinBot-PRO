/*const handler = async (conn, msg, {usedPrefix}) => {
    const menu = `
📜 *Menú de comandos disponibles:* 

 《 *Utilidades* 》
> _${usedPrefix}hola_
> _${usedPrefix}info_
> _${usedPrefix}cuentasbras_
> _${usedPrefix}tagall_
> _${usedPrefix}paypal_
> _${usedPrefix}ban_
> _${usedPrefix}rule34 <text>_

 《 *Otros* 》
> ${usedPrefix}reporte ⇏ si tienes problema con comandos
`;

    await conn.sendMessage(msg.key.remoteJid, {
        text: menu,
        quoted: msg
    });
};

handler.command = ['menu', 'help', 'ayuda'];
handler.help = ['menu', 'help', 'ayuda'];
handler.tags = ['menu'];

export default handler;*/


const handler = async (conn, msg, { usedPrefix }) => {
    const menu = `

> 📌 Usa los comandos con el prefijo: "${usedPrefix}"
➽📅 Fecha: ${new Date().toLocaleDateString('es-PE')}
➽⏰ Hora: ${new Date().toLocaleTimeString('es-PE')}

╭═══《𖣐 _Hepein Bot_ 𖣐》═══⊷❍
┃☭╭──────────────
┃☭│ 《 𖣐 _ᴏᴡɴᴇʀs ᴏғᴄ_ 𖣐 》
┃☭│ 
┃☭│ _Brashkie Dios _
┃☭│
┃☭│   (つ▀¯▀)つ
┃☭│
┃☭│   ║▌│█║▌│█║▌│█│║▌║
┃☭│   ║▌│█║▌│█║▌│█│║▌║
┃☭│   HepeinBot x BrashkieBot
┃☭│ 
┃☭╰───────────────
╰═════════════════⊷

╭━━《 *Bot Menu* 》══⊷❍
┃
┃ 💡 *Utilidades*:
┃ ➽ ${usedPrefix}hola
┃ ➽ ${usedPrefix}info
┃ ➽ ${usedPrefix}cuentasbras
┃ ➽ ${usedPrefix}tagall
┃ ➽ ${usedPrefix}paypal
┃ ➽ ${usedPrefix}ban
┃ ➽ ${usedPrefix}rule34 <texto>
┃ ➽ ${usedPrefix}menuhorny
┃
┃ 🔧 *Otros*:
┃ ➽ ${usedPrefix}reporte ⇏ si tienes problemas
┃ ➽ ${usedPrefix}idea ⇏ Envía una idea para
┃    mejorar al bot
┃
┃
╰━━━━━━━━━━━━━━━╯
`;

    await conn.sendMessages(msg.key.remoteJid, {
        text: menu,
        quoted: msg
    });
};

handler.command = ['menu', 'help', 'ayuda'];
handler.help = ['menu', 'help', 'ayuda'];
handler.tags = ['menu'];

export default handler;


