//Creado por BrashkieBot
import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const handler = async (conn, m, { text, isGroup }) => {
    const query = text.trim();

    const getImagesFromRule34 = async (query) => {
        try {
            const response = await fetch(`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${query}`);
            const xmlData = await response.text();
            const jsonData = await parseXML(xmlData);
            return jsonData.posts.post || [];
        } catch (error) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    };

    const parseXML = (xmlData) => {
        return new Promise((resolve, reject) => {
            parseString(xmlData, { explicitArray: false }, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    };

    if (!query) {
        return await conn.sendMessage(m.chat, {
            text: '❗ *Escribe lo que deseas buscar en Rule34.*\nEjemplo:\n> #rule34 hinata',
            quoted: m
        });
    }

    // Modo horny desactivado en grupos
    if (isGroup && !(global.db?.data?.chats?.[m.chat]?.modohorny)) {
        return await conn.sendMessage(m.chat, {
            text: '🔞 *¡Comando desactivado!*\nPídele a un admin que use:\n> #on modohorny',
            quoted: m
        });
    }

    try {
        const images = await getImagesFromRule34(query);
        if (images.length === 0) {
            return await conn.sendMessage(m.chat, {
                text: '> ❌ No se encontraron imágenes relacionadas.',
                quoted: m
            });
        }

        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imageUrl = randomImage.$.file_url;

        return await conn.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: `🥵 *Resultado para:* _${query}_`
        }, { quoted: m });

    } catch (error) {
        console.error('Error al procesar Rule34:', error);
        return await conn.sendMessage(m.chat, {
            text: '❌ Ocurrió un error al procesar la imagen.',
            quoted: m
        });
    }
};

handler.command = /^(rule34)$/i;
handler.help = ['rule34 <búsqueda>'];
handler.tags = ['hentai'];
handler.group = true;
handler.register = false;
handler.limit = false;

export default handler;
