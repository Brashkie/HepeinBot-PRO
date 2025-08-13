import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid.length > 0 ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : m.sender)
    let name = conn.getName(who)
    let name2 = conn.getName(m.sender)

    let str = m.mentionedJid.length > 0 || m.quoted 
        ? `\`${name2}\` besó a \`${name || who}\``
        : `\`Brashkie\` le beso a \`${name2}\``

    if (m.isGroup) {
        let videos = ['https://telegra.ph/file/63c8cc3cc497e6835b188.mp4',
            'https://telegra.ph/file/9651fa12f8b272afaf364.mp4',
            'https://telegra.ph/file/e1d573470c7b848ad1c59.mp4',
            'https://telegra.ph/file/0436ce6db32656eccb2f3.mp4',
            'https://telegra.ph/file/e58467fd29080d65fc15d.mp4'
        ]
    

        const video = videos[Math.floor(Math.random() * videos.length)]

        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, ptt: true, mentions: [who] }, { quoted: m })
    }
}

handler.command = handler.help = ['kiss1']
handler.tags = ['anime']
export default handler
