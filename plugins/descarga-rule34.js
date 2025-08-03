//Creado por BrashkieBot https://github.com/Brashkie/BrashkieBot-Hepein

import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const handler = async (m, { conn, text }) => {
    const query = text.trim();

    async function getImagesFromRule34(query) {
        try {
            const response = await fetch(`https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=${query}`);
            const xmlData = await response.text();
            let jsonData = await parseXML(xmlData);
            return jsonData.posts.post;
        } catch (error) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    }

    async function parseXML(xmlData) {
        return new Promise((resolve, reject) => {
            parseString(xmlData, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    if (!query) {
        conn.reply(m.chat, '𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿, 𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗹𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮𝘀 𝗯𝘂𝘀𝗰𝗮𝗿 𝗲𝗻 𝗿𝘂𝗹𝗲𝟯𝟰 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲.\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n> #rule34 hinata', m);
        return;
    }

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
      return conn.reply(m.chat, '> 🔞 *¡Estos comandos están desactivados!*\n*Para activarlos pidele permiso a admin:*\n> #on modohorny', m);

    }

    try {
        const images = await getImagesFromRule34(query);
        
        if (images.length > 0) {
            // Seleccionar aleatoriamente un objeto post de la lista de imágenes
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            const imageUrl = randomImage.$.file_url;
            conn.sendFile(m.chat, imageUrl, 'imagen.jpg', `*𝗔𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝗹𝗮 𝗶𝗺𝗮𝗴𝗲𝗻:  🥵_${query}_🥵*`, m);
        } else {
            conn.reply(m.chat, '> No se encontraron imágenes relacionadas con esta búsqueda en Rule34.', m);
        }
    } catch (error) {
        console.error('> 𝗘𝗿𝗿𝗼𝗿 𝗮𝗹 𝗽𝗿𝗼𝗰𝗲𝘀𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗥𝘂𝗹𝗲𝟯𝟰:', error);
        conn.reply(m.chat, '> 𝗢𝗰𝘂𝗿𝗿𝗶𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗲𝘅𝘁𝗿𝗮𝗲𝗿 𝗹𝗮 𝗶𝗺𝗮𝗴𝗲𝗻 𝗱𝗲 𝗥𝘂𝗹𝗲𝟯𝟰. 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿, 𝗶𝗻𝘁𝗲𝗻𝘁𝗮𝗹𝗼 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼.', m);
    }
};

handler.command = /^(rule34)$/i;
handler.help = ['rule34 <búsqueda>'];
handler.group = true;
handler.register = false;
handler.limit = 30; //No cambiar porque usar mucho el comando el whatsapp te banea
export default handler;
