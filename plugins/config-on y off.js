const opciones = ['antilink', 'antiviewonce', 'antispam', 'welcome', 'modohorny'];

const handler = async (conn, m, { args, usedPrefix, command, participants, sender, isGroup }) => {
    const chatID = m.chat;

    const opcion = args[0]?.toLowerCase();
    const valor = command === 'on' ? true : command === 'off' ? false : null;

    if (!valor) {
        const estado = opciones.map(opt => {
            const activa = global.db.data.chats?.[chatID]?.[opt] ? '✅ Activado' : '❌ Desactivado';
            return `🔹 *${opt}*: ${activa}`;
        }).join('\n');
        return conn.sendMessage(chatID, {
            text: `📊 *Estado de funciones:*\n\n${estado}`,
        }, { quoted: m });
    }

    if (!opciones.includes(opcion)) {
        return conn.sendMessage(chatID, {
            text: `❌ Opción inválida.\nOpciones válidas:\n- ${opciones.join('\n- ')}\n\nEjemplo:\n${usedPrefix}${command} antilink`,
        }, { quoted: m });
    }

    let isAdmin = false;

    if (isGroup) {
        isAdmin = participants?.some(p => p.id === sender && (p.admin === 'admin' || p.admin === 'superadmin'));
    }

    const isCreator = global.owner?.includes(sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
    if (!isCreator && !isAdmin) {
        return conn.sendMessage(chatID, {
            text: '🚫 Solo el *creador del bot* o un *administrador del grupo* puede usar este comando.',
        }, { quoted: m });
    }

    global.db.data.chats[chatID] = global.db.data.chats[chatID] || {};
    global.db.data.chats[chatID][opcion] = valor;

    return conn.sendMessage(chatID, {
        text: `✅ *${opcion}* ha sido ${valor ? 'activado' : 'desactivado'} correctamente.`,
    }, { quoted: m });
};

handler.command = /^(on|off)$/i;
handler.group = true;
handler.help = ['on <función>', 'off <función>'];
handler.tags = ['config'];

export default handler;
