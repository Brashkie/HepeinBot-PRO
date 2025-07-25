export const handler = async (conn, m, { participants }) => {
  const user = m.mentionedJid?.[0];

  if (!user) {
    return conn.sendMessage(m.chat, {
      text: '❌ Menciona a alguien para follar 😈'
    }, { quoted: m });
  }

  const notify = (await conn.onWhatsApp(user))?.[0]?.notify || 'esa persona';
  const nombre = `@${user.split('@')[0]}`;

  await conn.sendMessage(m.chat, {
    text: `😈 ¡${m.pushName} quiere follar con ${notify} (${nombre})! 😳🔥`,
    mentions: [user]
  }, { quoted: m });
};

handler.command = /^follar$/i;
export default handler;
