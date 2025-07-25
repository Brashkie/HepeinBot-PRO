let handler = async (m, { conn }) => {
    const chat = m.chat;

    if (!chat.endsWith('@g.us')) {
        return conn.sendMessage(m.chat, {
            text: '❌ Este comando solo funciona en grupos.'
        });
    }

    const groupMetadata = await conn.groupMetadata(chat);
    const participants = groupMetadata.participants;

    // Detectar el ID del bot correctamente
    const botNumber = conn.user?.id?.split(':')[0] + '@s.whatsapp.net';

    // Verificar si el bot es administrador
    const isBotAdmin = participants.find(p => p.id === botNumber)?.admin !== null;

    const respuesta = isBotAdmin
        ? '🛡️ *El bot ES administrador del grupo.*'
        : '❌ *El bot NO es administrador. No puede expulsar miembros ni usar comandos restringidos.*';

    await conn.sendMessage(m.chat, { text: respuesta });
};

handler.command = /^botadmin$/i;
handler.group = true;

export default handler;
