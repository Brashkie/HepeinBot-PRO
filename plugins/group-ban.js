const handler = async (conn, msg, { participants, usedPrefix, command }) => {
    const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net';
    const sender = msg.key.participant || msg.key.remoteJid;
    const groupId = msg.key.remoteJid;

    // Verificar si es grupo
    if (!groupId.endsWith('@g.us')) {
        return await conn.sendMessage(groupId, { text: '❌ Este comando solo funciona en grupos.' });
    }

    const groupMetadata = await conn.groupMetadata(groupId);
    const isBotAdmin = groupMetadata.participants.find(p => p.id === botNumber)?.admin;
    const isSenderAdmin = groupMetadata.participants.find(p => p.id === sender)?.admin;

    if (!isBotAdmin) {
        return await conn.sendMessage(groupId, { text: '❌ *El bot no es administrador.* No puedo expulsar a nadie.', quoted: msg });
    }

    if (!isSenderAdmin) {
        return await conn.sendMessage(groupId, { text: '❌ *Tú no eres administrador.* No puedes usar este comando.', quoted: msg });
    }

    const mention = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) {
        return await conn.sendMessage(groupId, { text: `❌ Debes mencionar al usuario que quieres expulsar.\nEjemplo: *${usedPrefix + command} @usuario*`, quoted: msg });
    }

    try {
        await conn.groupParticipantsUpdate(groupId, [mention], 'remove');
        return await conn.sendMessage(groupId, { text: `✅ Usuario @${mention.split('@')[0]} fue expulsado.`, mentions: [mention], quoted: msg });
    } catch (e) {
        console.log('❌ Error al expulsar:', e);
        return await conn.sendMessage(groupId, { text: '❌ No se pudo expulsar al usuario. Verifica que esté en el grupo y que el bot tenga permisos.', quoted: msg });
    }
};

handler.command = ['ban'];
handler.help = ['ban @usuario'];
handler.tags = ['group'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
