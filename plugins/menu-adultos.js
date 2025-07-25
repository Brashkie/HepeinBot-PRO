const handler = async (conn, msg, { usedPrefix }) => {
    const menu = `
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

╭━━《 *+18* 》══⊷❍
┃
┃ 💡 *Utilidades*:
┃ ➽ ${usedPrefix}pack
┃ ➽ ${usedPrefix}pack2
┃ ➽ ${usedPrefix}pack3
┃ ➽ ${usedPrefix}videoxxx
┃ ➽ ${usedPrefix}videoxxxlesbi
┃ ➽ ${usedPrefix}packgirl
┃ ➽ ${usedPrefix}packmen
┃ ➽ ${usedPrefix}videosxxxc
┃ ➽ ${usedPrefix}videosxxxc2
┃ ➽ ${usedPrefix}rule34 <texto>
┃
┃
┃ 📌 Usa los comandos con el prefijo: "${usedPrefix}"
┃ 📅 Fecha: ${new Date().toLocaleDateString('es-PE')}
┃ ⏰ Hora: ${new Date().toLocaleTimeString('es-PE')}
┃
╰━━━━━━━━━━━━━━━╯
`;

    await conn.sendMessage(msg.key.remoteJid, {
        text: menu,
        quoted: msg
    });
};

handler.command = ['menuhorny', 'menuporno', 'menuadult'];
handler.help = ['menuhorny', 'menuporno', 'menuadult'];
handler.tags = ['menu2'];

export default handler;