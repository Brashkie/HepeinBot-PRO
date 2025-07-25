const handler = async (conn, m, { participants }) => {
    const nombres = await Promise.all(participants.map(async (p) => {
        const nombre = await conn.getName(p.id);
        return `⊹ @${nombre}`;
    }));

    await conn.sendMessage(m.chat, {
        text: `╭━〔 👥 *Mencionando a todos* 〕━⬣\n\n${nombres.join('\n')}\n╰━━━━⬣`,
        mentions: participants.map(p => p.id)
    }, { quoted: m });
};

handler.command = /^tagall$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
