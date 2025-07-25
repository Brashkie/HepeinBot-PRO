/*let handler = async (conn, msg, usedPrefix) => {
    const sender = msg.key.participant || msg.key.remoteJid;
    const nombre = msg.pushName || 'usuario';

    await conn.sendMessage(msg.key.remoteJid, {
        text: `👋 ¡Hola @${sender.split('@')[0]}! ¿Cómo estás?`,
        mentions: [sender],
    }, {
        quoted: msg
    });
};

handler.command = ['hola'];
handler.help = ['hola'];
handler.tags = ['util'];

export default handler;
*/

let handler = async (conn, msg) => {
    const sender = msg.key.participant || msg.key.remoteJid;
    const name = msg.pushName || 'usuario';

    await conn.sendMessage(msg.key.remoteJid, {
        text: `👋 ¡Hola @${name}! ¿Cómo estás?`,
        mentions: [sender],
    }, {
        quoted: msg
    });
};

handler.command = ['hola'];
handler.help = ['hola'];
handler.tags = ['util'];

export default handler;
