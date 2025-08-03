//Creado por HamilyBot

let handler = async (m, { conn, text }) => {
    // Verifica si el mensaje vino desde un canal
    if (m.chat.endsWith('@newsletter')) {
        await m.reply(`> 𒁈 El ID de este canal es:\n\n*${m.chat}*`)
        console.log(`Canal detectado: ${m.chat}`)
    } else {
        await m.reply('❌ Este comando solo funciona desde un canal de WhatsApp.')
    }
}

handler.command = ['idcanal', 'canalid', 'getcanal']
handler.tags = ['tools']
handler.help = ['idcanal']
handler.private = true // Opcional: para que no se use en grupos

export default handler
