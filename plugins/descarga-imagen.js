/*import { image_search } from 'duckduckgo-images-api';

const handler = async (m, { conn, args }) => {
    const query = args.join(' ');
    if (!query) throw '📷 Escribe lo que deseas buscar. Ejemplo:\n#imagen perro';

    const results = await image_search({ query, moderate: false, iterations: 1 });
    if (!results.length) throw '❌ No encontré ninguna imagen. Intenta con otro nombre.';

    const randomImage = results[Math.floor(Math.random() * results.length)];
    await conn.sendMessage(m.chat, { image: { url: randomImage.image }, caption: `🔍 Resultado de: *${query}*` }, { quoted: m });
};

handler.command = ['imagen', 'img', 'buscarimg'];
handler.help = ['imagen <nombre>'];
handler.tags = ['tools'];
export default handler;
*/

import { image_search } from 'duckduckgo-images-api';

const handler = async (conn, m, { args }) => {
    const query = args.join(' ');
    if (!query) {
        await conn.sendMessage(m.chat, { text: '📷 Escribe lo que deseas buscar. Ejemplo:\n#imagen perro' }, { quoted: m });
        return;
    }

    const results = await image_search({ query, moderate: false, iterations: 1 });
    if (!results.length) {
        await conn.sendMessage(m.chat, { text: '❌ No encontré ninguna imagen. Intenta con otro nombre.' }, { quoted: m });
        return;
    }

    const randomImage = results[Math.floor(Math.random() * results.length)];
    await conn.sendMessage(
        m.chat,
        {
            image: { url: randomImage.image },
            caption: `🔍 Resultado de: *${query}*`,
        },
        { quoted: m }
    );
};

handler.command = ['imagen', 'img', 'buscarimg'];
handler.help = ['imagen <nombre>'];
handler.tags = ['tools'];

export default handler;
