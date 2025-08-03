//Creado por BrashkieBot https://github.com/Brashkie/BrashkieBot-Hepein

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) {
        throw `*📝 Escribe una palabra para buscar en GIPHY*\n\nEjemplo:\n> ${usedPrefix + command} gato`
    }
    
    const apiKey = 'NoXp0QCKaRe5Km23RzJ1JGfwJrC3qwe5'
    const query = encodeURIComponent(text)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&rating=pg-13&lang=es`

    try {
        const res = await fetch(url)
        const json = await res.json()

        if (!json.data || json.data.length === 0) {
            return m.reply(`❌ No se encontraron GIFs de *${text}*`)
        }

        const gif = json.data[Math.floor(Math.random() * json.data.length)] // resultado aleatorio
        const format = Math.random() < 0.5 ? 'sticker' : 'gif' // elegir aleatoriamente formato

        if (format === 'sticker') {
            const webpUrl = gif.images.original.webp
            await conn.sendMessage(m.chat, {
                sticker: { url: webpUrl }
            }, { quoted: m })
        } else {
            const mp4Url = gif.images.original.mp4
            await conn.sendMessage(m.chat, {
                video: { url: mp4Url },
                gifPlayback: true,
                caption: `🎬 *GIF Aleatorio:* "${text}"`
            }, { quoted: m })
        }

    } catch (e) {
        console.error(e)
        m.reply('⚠️ Ocurrió un error al buscar en GIPHY.')
    }
}

handler.help = ['giphy <texto>']
handler.tags = ['fun', 'search']
handler.command = /^giphy$/i
export default handler
