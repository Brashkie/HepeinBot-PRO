const handler = async (conn, msg) => {
    const texto = `
𒂭 𝗛𝗼𝗹𝗮!! 𝗔𝗴𝗿𝗮𝗱𝗲𝗰𝗲𝗿𝗶́𝗮 𝘀𝗶 𝗺𝗲 𝗔𝗽𝗼𝘆𝗮𝘀 𝗗𝗼𝗻𝗮𝗻𝗱𝗼 𝗮 𝗺𝗶 𝗕𝗼𝘁.
𒂭 𝗛𝗲𝗹𝗹𝗼!! 𝗜 𝘄𝗼𝘂𝗹𝗱 𝗮𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗲 𝗶𝘁 𝗶𝗳 𝘆𝗼𝘂 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗺𝗲 𝗯𝘆 𝗱𝗼𝗻𝗮𝘁𝗶𝗻𝗴 𝘁𝗼 𝗺𝘆 𝗯𝗼𝘁.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 𝙋𝙖𝙮𝙋𝙖𝙡 - 𝕭𝖗𝖆𝖘𝖍𝖐𝖎𝖊 𝕯𝖎𝖔𝖘
🔗 *https://paypal.me/BrashkieBot*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
¡Cualquier apoyo es bienvenido! 🙏💙`;

    await conn.sendMessage(msg.chat || msg.key.remoteJid, {
        text: texto
    }, { quoted: msg });
};

handler.command = /^dona(te|si)?|donar|apoyar|paypal|donating$/i;
handler.help = ['donar', 'paypal', 'apoyar'];
handler.tags = ['info'];

export default handler;
