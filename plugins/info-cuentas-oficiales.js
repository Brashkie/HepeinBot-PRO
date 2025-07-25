const media = 'https://telegra.ph/file/34ca2bf7d84668a682a93.jpg';

const handler = async (conn, m, {usedPrefix}) => {
    const numero = m.key.participant || m.key.remoteJid || '';
    const numeroFormateado = numero.split('@')[0];

    const texto = ` ●❯─｢ 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 𝘿𝙀 𝙃𝙀𝙋𝙀𝙄𝙉𝘽𝙊𝙏 ｣─❮●

> *GITHUB:* https://github.com/Brashkie
> *INSTAGRAM:* https://www.instagram.com/moisesyaurivilcacenteno/
> *YOUTUBE:* https://www.youtube.com/@moisesyaurivilcacenteno3683
> *FACEBOOK:* https://www.facebook.com/moises.yaurivilca/
> *DICORD:* https://discord.gg/CX5Br3XY

Si tienes dudas o sugerencias, escríbenos por Discord`;

    const fkontak = {
        key: {
            participants: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            fromMe: false,
            id: 'Hola'
        },
        message: {
            contactMessage: {
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;BrashkieBot;;;\nFN:BrashkieBot\nitem1.TEL;waid=${numeroFormateado}:${numeroFormateado}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        participant: '0@s.whatsapp.net'
    };

    await conn.sendMessage(m.key.remoteJid, {
        image: { url: media }, // ✅ ahora usa imagen en vez de video
        caption: texto,
        footer: 'BrashkieBot',
        buttons: [
            { buttonId: '.grupos', buttonText: { displayText: '📢 Grupos Oficiales' }, type: 1 },
            { buttonId: '#owner', buttonText: { displayText: '👑 Creador' }, type: 1 },
            { buttonId: '/menu', buttonText: { displayText: '📖 Menú Principal' }, type: 1 },
        ],
        headerType: 4 // ✅ tipo correcto para imagen con botones
    }, { quoted: fkontak });
};

handler.command = /^cuentasoficiales|brasc|accounts|cuentasbras$/i;
handler.exp = 10;

export default handler;
