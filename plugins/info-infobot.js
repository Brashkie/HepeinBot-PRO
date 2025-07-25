import { botName } from '../config.js';

const handler = async (conn, msg) => {
    const nombre = msg.pushName || 'usuario';
    const texto = `👤 *Información del bot*\n\n🤖 Nombre: ${botName}\n👋 Usuario: ${nombre}\n📅 Fecha: ${new Date().toLocaleDateString('es-PE')}`;
    
    await conn.sendMessage(msg.key.remoteJid, {
        text: texto,
        quoted: msg
    });
};

handler.command = ['info', 'about'];
handler.help = ['info', 'about'];
handler.tags = ['bot'];

export default handler;
