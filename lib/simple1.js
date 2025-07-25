// lib/simple.js
import fs from 'fs'
import mime from 'mime-types'

export default function extendConn(conn) {
    // Mencionar miembro
    conn.parseMention = async (text = '') => {
        try {
            if (typeof text !== 'string') return [];
            const matches = [...text.matchAll(/@([0-9]{5,15})/g)];
            return matches.map(match => `${match[1]}@s.whatsapp.net`).filter(jid => jid.includes('@s.whatsapp.net'));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    conn.getName = async function (jid) {
        jid = jid?.split('/')[0];
        const contact = this.contacts?.[jid] || {};
        return contact.name || contact.notify || jid.split('@')[0];
    };


    // 🔁 Responder rápidamente
    conn.reply = async (chatId, text, quoted = null, options = {}) => {
        const contextInfo = {
            mentionedJid: await conn.parseMention(text),
            isForwarded: true,
            forwardingScore: 1,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363197223158904@newsletter", // tu canal o uno simulado
                newsletterName: "𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒"
            }
        };
        return await conn.sendMessage(chatId, { text, contextInfo }, { quoted, ...options });
    };
    // 📄 Enviar archivos (PDF, ZIP, DOC, etc.)
    conn.sendFile = async (
        jid, pathOrBuffer, filename = '', caption = '', quoted = null, mimetype = null
    ) => {
        const buffer = Buffer.isBuffer(pathOrBuffer)
        ? pathOrBuffer
        : fs.readFileSync(pathOrBuffer)
        const mtype = mimetype || mime.lookup(filename) || 'application/octet-stream'

        return conn.sendMessage(jid, {
            document: buffer,
            fileName: filename,
            mimetype: mtype,
            caption
        }, { quoted })
    }

    // 🖼 Enviar imagen con caption
    conn.sendImage = (jid, pathOrBuffer, caption = '', quoted = null) => {
        const buffer = Buffer.isBuffer(pathOrBuffer)
        ? pathOrBuffer
        : fs.readFileSync(pathOrBuffer)

        return conn.sendMessage(jid, {
            image: buffer,
            caption
        }, { quoted })
    }

    // 📹 Enviar video con caption
    conn.sendVideo = (jid, pathOrBuffer, caption = '', quoted = null) => {
        const buffer = Buffer.isBuffer(pathOrBuffer)
        ? pathOrBuffer
        : fs.readFileSync(pathOrBuffer)

        return conn.sendMessage(jid, {
            video: buffer,
            caption
        }, { quoted })
    }

    // 🔊 Enviar audio o nota de voz
    conn.sendAudio = (jid, pathOrBuffer, ptt = false, quoted = null) => {
        const buffer = Buffer.isBuffer(pathOrBuffer)
        ? pathOrBuffer
        : fs.readFileSync(pathOrBuffer)

        return conn.sendMessage(jid, {
            audio: buffer,
            mimetype: 'audio/mpeg',
            ptt
        }, { quoted })
    }

    // ✅ Botones simples con texto
    conn.sendButton = (jid, text = '', footer = '', buttons = [], quoted = null) => {
        const formatted = buttons.map((btn, i) => ({
            buttonId: btn.id || `id${i}`,
            buttonText: { displayText: btn.text },
            type: 1
        }))

        return conn.sendMessage(jid, {
            text,
            footer,
            buttons: formatted,
            headerType: 1
        }, { quoted })
    }

    // sendMessage normal
    const originalSendMessage = conn.sendMessage;
    
    conn.sendMessages = async function (jid, content, options = {}) {
        const contextInfoDefault = {
            mentionedJid: await conn.parseMention(content?.text || content?.caption || ''),
            isForwarded: true,
            forwardingScore: 1,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363197223158904@newsletter",
                newsletterName: "𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒"
            }
        };

        if (!content.contextInfo) {
            content.contextInfo = contextInfoDefault;
        }
        return originalSendMessage.call(conn, jid, content, options);
    };

    // 🌐 Imagen + botones (Hydrated)
    conn.sendHydrated = async (
        jid,
        text = '',
        footer = '',
        imagePath = null,
        buttons = [], // [{text, id}]
        quoted = null,
        linkButtons = [] // [{text, url}]
    ) => {
        const btns = []

        if (buttons && buttons.length) {
            buttons.forEach((btn, i) => {
                btns.push({
                    buttonId: btn.id || `id${i}`,
                    buttonText: { displayText: btn.text },
                    type: 1
                })
            })
        }

        if (linkButtons && linkButtons.length) {
            linkButtons.forEach((btn) => {
                btns.push({
                    buttonText: { displayText: btn.text },
                    type: 2,
                    urlButton: {
                        displayText: btn.text,
                        url: btn.url
                    }
                })
            })
        }

        let image = null
        if (imagePath) {
            if (Buffer.isBuffer(imagePath)) {
                image = imagePath
            } else if (/^https?:\/\//.test(imagePath)) {
                image = { url: imagePath }
            } else if (fs.existsSync(imagePath)) {
                image = fs.readFileSync(imagePath)
            }
        }

        const message = {
            image,
            caption: text,
            footer,
            buttons: btns,
            headerType: 4
        }
        return conn.sendMessage(jid, message, { quoted })
    }

    return conn
}