/*import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const __dirname = path.resolve();
const pluginPath = path.join(__dirname, 'plugins');

const handler = async (conn, msg) => {
    const archivos = fs.readdirSync(pluginPath).filter(f => f.endsWith('.js'));
    let texto = '*📚 Lista de comandos disponibles:*\n\n';

    for (const archivo of archivos) {
        const ruta = path.join(pluginPath, archivo);
        const modulo = await import(pathToFileURL(ruta).href);
        const comando = modulo.default?.command || [];
        const tags = modulo.default?.tags?.join(', ') || 'sin categoría';

        if (comando.length > 0) {
            texto += `• ${comando.map(c => `/${c}`).join(', ')} (${tags})\n`;
        }
    }

    await conn.sendMessage(msg.key.remoteJid, { text: texto }, { quoted: msg });
};

handler.command = ['help', 'menu', 'ayuda'];
handler.tags = ['utilidad'];

export default handler;
*/