const linkRegex = /(https?:\/\/[^\s]+)/i;

const handler = async (conn, msg) => {
    const chat = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;

    // Asegurarse de que sea grupo
    if (!chat.endsWith('@g.us')) return;

    // Verificar que la función esté activada
    const setting = global.db?.data?.settings?.[chat]?.antilink;
    if (!setting) return;

    // Extraer texto del mensaje
    const mensaje =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text ||
        msg.message?.imageMessage?.caption ||
        msg.message?.videoMessage?.caption ||
        '';

    if (!linkRegex.test(mensaje)) return;

    // Obtener datos del grupo y admin
    const groupMetadata = await conn.groupMetadata(chat);
    const admins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

    const isAdmin = admins.includes(sender);
    const botAdmin = groupMetadata.participants.find(p => p.id === conn.user.id)?.admin;

    // Si el bot no es admin o el usuario es admin, no hacer nada
    if (isAdmin || !botAdmin) return;

    try {
        // Eliminar mensaje
        await conn.sendMessage(chat, {
            delete: msg.key
        });

        // Avisar
        await conn.sendMessage(chat, {
            text: `🚫 *Prohibido enviar enlaces*\n@${sender.split('@')[0]} será eliminado.`,
            mentions: [sender]
        });

        // Expulsar
        await conn.groupParticipantsUpdate(chat, [sender], 'remove');
    } catch (e) {
        console.error('❌ Error en _antilink.js:', e);
    }
};

export default handler;

handler.before = true; // 🔁 Se ejecuta antes que los comandos
handler.group = true;
handler.botAdmin = true;
handler.fail = null;
