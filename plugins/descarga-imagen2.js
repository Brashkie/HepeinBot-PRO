import { googleImage } from '@bochilteam/scraper';

const handler = async (conn, m, { text, usedPrefix, command }) => {
    if (!text) {
        return m.reply(`📷 Escribe lo que deseas buscar. Ejemplo:\n*${usedPrefix + command} paisajes*`);
    }

    // Palabras prohibidas (anti-NSFW)
    const prohibited = [
        'porno', 'porn', 'gore', 'hentai', 'sex', 'xxx', 'rule34', 'cp', 'polla', 'verga', 'vagina', 'pene', 
        'chocha', 'coño', 'culito', 'culo', 'teta', 'pedo', 'zoofilia', 'necrofilia', 'horny', 'desnudo',
        'desnuda', 'futanari', 'rule 34', 'anal', 'nude', 'nsfw', 'pija', 'puto', 'puta', 'putita', 'putito'
    ];

    if (prohibited.some(word => text.toLowerCase().includes(word))) {
        return m.reply('⚠️ *No busques contenido prohibido.* 🚫');
    }

    try {
        const res = await googleImage(text);
        const link = res.getRandom(); // obtiene imagen aleatoria
        await conn.sendMessage(
            m.chat,
            {
                image: { url: link },
                caption: `🔍 Resultado de: *${text}*`,
            },
            { quoted: m }
        );
    } catch (err) {
        console.error(err);
        await conn.sendMessage(m.chat, { text: '❌ No se pudo obtener la imagen. Intenta más tarde.' }, { quoted: m });
    }
};

handler.command = /^(gimage|image|imagen2)$/i;
handler.help = ['imagen2 <texto>'];
handler.tags = ['tools'];
handler.exp = 20;
handler.money = 50;

export default handler;
