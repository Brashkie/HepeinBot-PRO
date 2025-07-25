export const handler = async (conn, update) => {
    const { id, participants, action } = update;

    if (action !== 'add') return; // Solo cuando alguien es añadido al grupo

    const groupData = global.db.data.chats[id];
    if (!groupData?.welcome) return; // Si no está activado el welcome, salir

    const metadata = await conn.groupMetadata(id);
    const groupName = metadata.subject;

    for (const user of participants) {
        const username = '@' + user.split('@')[0];
        const mensaje = `👋 ¡Bienvenido ${username} al grupo *${groupName}*!\n\n🪄 Por favor, lee las reglas y participa con respeto.`;

        await conn.sendMessage(id, {
            text: mensaje,
            mentions: [user]
        });
    }
};
