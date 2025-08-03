//Creado por BrashkieBot https://github.com/Brashkie/BrashkieBot-Hepein

import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const handler = async (m, { conn, text }) => {
    const query = text.trim();

    async function getVideoPosts(query) {
        try {
            const res = await fetch(`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${encodeURIComponent(query + " video")}`);
            const xml = await res.text();
            const json = await parseXML(xml);
            return json.posts.post || [];
        } catch (err) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    }
    
    async function parseXML(xml) {
        return new Promise((resolve, reject) => {
            parseString(xml, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    if (!query) {
        return conn.reply(m.chat, '𝗘𝘀𝗰𝗿𝗶𝗯𝗲 𝗹𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮𝘀 𝗯𝘂𝘀𝗰𝗮𝗿 𝗲𝗻 𝗥𝘂𝗹𝗲𝟯𝟰 𝘃𝗶𝗱𝗲𝗼𝘀.\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n> #videorule34 hinata', m);
    }

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.reply(m.chat, '> 🔞 *¡Estos comandos están desactivados!*\n*Para activarlos pidele permiso a admin:*\n> #on modohorny', m);
    }

    try {
        const posts = await getVideoPosts(query);

        const videos = posts.filter(p => {
            const url = p.$.file_url || '';
            return url.endsWith('.mp4') || url.endsWith('.webm');
        });

        if (videos.length < 0) {
            return conn.reply(m.chat, `> No se encontraron imágenes relacionadas con esta búsqueda en Rule34.`, m);
        }

        const selected = videos[Math.floor(Math.random() * videos.length)];
        const videoUrl = selected.$.file_url;

        await conn.sendFile(m.chat, videoUrl, 'video.mp4', `🎥 *𝗔𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼: 🥵_${query}_🥵*`, m);
    } catch (e) {
        console.error('> 𝗘𝗿𝗿𝗼𝗿 𝗮𝗹 𝗽𝗿𝗼𝗰𝗲𝘀𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 #videorule34:', e);
        conn.reply(m.chat, '> Ocurrió un error al buscar o enviar el video.', m);
    }
};

handler.command = /^(videorule34)$/i;
handler.help = ['videorule34 <búsqueda>'];
handler.tags = ['nsfw'];
handler.group = true;
handler.limit = 80;  //No cambiar porque usar mucho el comando el whatsapp te banea
export default handler;
