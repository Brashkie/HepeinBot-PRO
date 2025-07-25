// Creado por BrashkieBot

const handler = async (conn, m, { text, sender, usedPrefix, command }) => {
    if (!text) {
        return conn.sendMessage(m.chat, {
            text: `🧠 *Envía una idea o sugerencia para mejorar el bot.*\n\n📌 *Ejemplo:*\n${usedPrefix}${command} Agrega comandos para juegos.`
        }, { quoted: m });
    }

    const { ownerNumber } = await import('../config.js');
    const ownerJid = ownerNumber + '@s.whatsapp.net';

    const mensaje = `📨 *Nueva sugerencia recibida*\n\n` +
        `👤 *Usuario:* wa.me/${sender}\n` +
        `🧠 *Sugerencia:* ${text}`;

    // Notifica al usuario
    await conn.sendMessage(m.chat, {
        text: '✅ ¡Gracias! Tu sugerencia fue enviada al creador del bot.'
    }, { quoted: m });

    // Envía al owner
    await conn.sendMessage(ownerJid, {
        text: mensaje
    });
};

handler.command = ['idea', 'sugerencia'];
handler.help = ['idea <mensaje>', 'sugerencia <mensaje>'];
handler.tags = ['utilidad'];
handler.register = true;
handler.group = false;

export default handler;
