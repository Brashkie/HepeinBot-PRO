// plugins/reporte.js
import { ownerNumber } from '../config.js';

const handler = async (conn, msg, usedPrefix) => {
    const texto = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
    const args = texto.slice(usedPrefix.length).trim().split(/\s+/).slice(1).join(' ');

    const sender = msg.key.participant || msg.key.remoteJid;
    const nombre = msg.pushName || 'Usuario';
    const tipoChat = msg.key.remoteJid.endsWith('@g.us') ? 'Grupo' : 'Privado';

    if (!args) {
        await conn.sendMessage(msg.key.remoteJid, {
            text: '⚠️ Debes escribir el motivo del reporte.\n\nEjemplo:\n#reporte El comando no funciona.',
        }, { quoted: msg });
        return;
    }

    const reporte = `📢 *Nuevo Reporte*\n\n👤 *Nombre:* ${nombre}\n🆔 *Usuario:* ${sender}\n💬 *Tipo:* ${tipoChat}\n📝 *Mensaje:* ${args}`;

    // Enviar reporte al dueño del bot
    const ownerJid = `${ownerNumber}@s.whatsapp.net`;
    await conn.sendMessage(ownerJid, {
        text: reporte,
        mentions: [sender],
    });

    // Confirmación al usuario que reportó
    await conn.sendMessage(msg.key.remoteJid, {
        text: '✅ Tu reporte ha sido enviado al administrador. ¡Gracias!',
    }, { quoted: msg });
};

handler.command = ['reporte'];
handler.help = ['reporte <motivo>'];
handler.tags = ['info'];

export default handler;
