const handler = async (conn, msg, comando, prefix) => {
    const texto = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
    const nombre = msg.pushName || 'Usuario';

    await conn.sendMessage(msg.key.remoteJid, {
        text: `> ❌ El comando *${prefix}${comando}* no existe, Escribe *${prefix}menu* para ver los comandos. `,
    }, { quoted: msg });
};

handler.command = []; // no es un comando
export default handler;
