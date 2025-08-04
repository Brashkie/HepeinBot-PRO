import fs from 'fs';
import archiver from 'archiver';

let handler = async (m, { conn, text, usedPrefix, command }) => {
const databaseFolder = './database';
const jadibtsFolder = './BrashkieJadiBot'; 
const tarPath = './backup.tar.gz'; 
let option = parseInt(text);

if (![1, 2, 3].includes(option)) return await m.reply(`*⚠️ ¿QUÉ HAGO? UN BACKUP DE LA SESIÓN O BASE DE DATOS?*. USAR DE LA SIGUIENTE MANERA. EJEMPLO:\n${usedPrefix + command} 1 _(Enviar la session "creds.json")_\n${usedPrefix + command} 2 _(Enviar la base de datos)_\n${usedPrefix + command} 3 _(Envía la carpeta "BrashkieJadiBot" completa)_`);

try {
let d = new Date();
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });

if (option === 1) {
const path = conn.user.jid !== global.conn.user.jid ? `./BrashkieJadiBot/${conn.user.jid.split`@`[0]}/creds.json` : `./HepeinBotSession/creds.json`;
if (!fs.existsSync(path)) return await m.reply('⚠️ El archivo *creds.json* no existe.');

let creds = fs.readFileSync(path);
await conn.reply(m.sender, `📁 *Sesión* (${date})`, fkontak);
await conn.sendMessage(m.sender, { document: creds, mimetype: 'application/json', fileName: `creds.json` }, { quoted: m });

} else if (option === 2) {
if (!fs.existsSync(databaseFolder)) return await m.reply('⚠️ La carpeta *database* no existe.');

await m.reply(`_*🗂️ Preparando envío de base de datos...*_`)
const output = fs.createWriteStream(tarPath);
const archive = archiver('tar', { gzip: true,
gzipOptions: { level: 9 }});
output.on('close', async () => {
console.log(`Archivo .tar.gz creado: ${archive.pointer()} bytes`);
await conn.reply(m.sender, `📂 *Base de datos* (${date})`, fkontak);
await conn.sendMessage(m.sender, { document: fs.readFileSync(tarPath), mimetype: 'application/gzip', fileName: `database.tar.gz` }, { quoted: m });
fs.unlinkSync(tarPath);
});

archive.on('error', (err) => { throw err; });
archive.pipe(output);
archive.directory(databaseFolder, false);
archive.finalize();

} else if (option === 3) {
if (!fs.existsSync(jadibtsFolder)) return await m.reply('⚠️ La carpeta *BrashkieJadiBot* no existe.');
await m.reply(`_*📂 Preparando la carpeta "BrashkieJadiBot"...*_`);
const output = fs.createWriteStream(tarPath);
const archive = archiver('tar', { gzip: true,
gzipOptions: { level: 9 }});
output.on('close', async () => {
console.log(`Archivo .tar.gz creado: ${archive.pointer()} bytes`);
await conn.reply(m.sender, `📂 *Carpeta "BrashkieJadiBot"* (${date})`, fkontak);
await conn.sendMessage(m.sender, { document: fs.readFileSync(tarPath), mimetype: 'application/gzip', fileName: `BrashkieJadiBot.tar.gz` }, { quoted: m });
fs.unlinkSync(tarPath);
});

archive.on('error', (err) => { throw err; });
archive.pipe(output);
archive.directory(jadibtsFolder, false);
archive.finalize();
}} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command);
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`);
console.log(e)
}
};
handler.help = ['backup'];
handler.tags = ['owner'];
handler.command = /^(backup|respaldo|copia)$/i;
handler.owner = true;

export default handler;
