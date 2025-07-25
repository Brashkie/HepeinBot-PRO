const opciones = ['bienvenida'];

const handler = async (conn, msg, usedPrefix, command, args) => {
    const opcion = args[0]?.toLowerCase();
    const valor = command === 'on' ? true : command === 'off' ? false : null;

    if (!valor || !opciones.includes(opcion)) {
        return conn.sendMessage(msg.chat, {
            text: `🚫 Uso incorrecto.\n\nEjemplo:\n${usedPrefix}on bienvenida\n${usedPrefix}off bienvenida\n\nOpciones disponibles:\n- bienvenida`,
        }, { quoted: msg });
    }

    const isGroup = msg.key.remoteJid.endsWith('@g.us');
    const sender = msg.key.participant || msg.key.remoteJid;

    // Creador del bot
    const isCreator = global.owner?.includes(sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net');

    // Admins del grupo
    let isAdmin = false;
    if (isGroup) {
        const metadata = await conn.groupMetadata(msg.chat);
        isAdmin = metadata.participants.some(p => p.id === sender && (p.admin === 'admin' || p.admin === 'superadmin'));
    }

    // Solo creador o admin puede ejecutar
    if (!isCreator && !isAdmin) {
        return conn.sendMessage(msg.chat, {
            text: '❌ Solo el creador del bot o un administrador del grupo puede usar este comando.',
        }, { quoted: msg });
    }

    // Activar o desactivar
    global.db.data.chats[msg.chat] = global.db.data.chats[msg.chat] || {};
    global.db.data.chats[msg.chat].bienvenida = valor;

    return conn.sendMessage(msg.chat, {
        text: `✅ Función de bienvenida ${valor ? 'activada' : 'desactivada'} correctamente.`,
    }, { quoted: msg });
};

handler.command = /^(on|off)$/i;
handler.help = ['on <bienvenida>', 'off <bienvenida>'];
handler.tags = ['config'];
handler.group = true;

export default handler;