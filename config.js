import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from 'cheerio';
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > Agrega el número que será Bot y los que serán propietarios.
// [EN] > Add the number that will be Bot and those that will be owners.
global.owner = [
["51918340705", '━═▣ 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 ▣═━', true]]

global.mods = []
global.prems = []

//cambia a false Desactivar en "auto-reconexion" de sub-bots
global.brashkieJadibts = true

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ RENDER ❱❱
//Kurt18: Obtener el código QR por la URL del Hosting
global.obtenerQrWeb = 0; //Solo valores: 1 o 0
//Kurt18: Aplica para Host Render.com
global.keepAliveRender = 0; //Solo valores: 1 o 0
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ methodCode ❱❱
// [ES] > Agregue el número del Bot en "botNumberCode" si desea recibir código de 8 dígitos sin registrar el número en la consola.
// [EN] > Add the Bot number in "botNumberCode" if you want to receive 8-digit code without registering the number in the console.
global.botNumberCode = "" //example: "+59309090909"
global.confirmCode = "" // No tocar esto : Do not touch this line
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ Multi Idioma Dinámico : Dynamic Multi Language (MID-GB) ❱❱
// [ES] > Agregué uno de los idiomas disponibles para el Bot en "mid".
// [EN] > I added one of the languages available for the Bot in "mid".

// ❰❰ IDIOMAS DISPONIBLES : AVAILABLE LANGUAGES ❱❱
// Español 👉 es           
// English 👉 en
global.lenguajeGB = es
global.mid = esDefault
global.version_language = '1.0 (MID-GB)'

// [ES] > Si "default_language" esta vacío, su idioma predeterminado será Español o se usará el idioma que cada usuario haya seleccionado al momento de registrarse. 
// [EN] > If "default_language" is empty, your default language will be Spanish or the language that each user has selected at the time of registration will be used.
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ API KEYS ❱❱
global.baileys = "@whiskeysockets/baileys"
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api', key: 'GataDiosV3' },
stellar: { url: 'https://api.stellarwa.xyz', key: null },
skizo: { url: 'https://skizo.tech/api', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api', key: null }, 
exonity: { url: 'https://exonity.tech/api', key: 'GataDios' },
ryzendesu: { url: 'https://api.ryzendesu.vip/api', key: null },
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
davidcyriltech: { url: 'https://api.davidcyriltech.my.id', key: null },
dorratz: { url: 'https://api.dorratz.com', key: null },
siputzx: { url: 'https://api.siputzx.my.id/api', key: null },
vreden: { url: 'https://api.vreden.web.id/api', key: null },
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ bibliotecas : libraries ❱❱
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > Agregate a ti, colaboradores o ayudates, aparecerá en el comando de lista de contactos.
// [EN] > Adding yourself, collaborators or helpers will appear in the contact list command.
global.official = [ // Agregate si eres Owner
["51918340705", 'HEPEIN 𒁈', 1],]

global.mail = '' // Add email
global.desc = '╭══════⊂(^(工)^)⊃══════╮' // Add short description (20 caractres max)
global.desc2 = '' // Add long description (90 caractres max) (Este parámetro se aplicará sólo si su whasapp no tiene descripción)
global.country = '' // Add country, example: 🇪🇨
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

global.packname = `╭ ━═▣ 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 ▣═━\n┃\n┃ 》 𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖:\n┃ ND\n┃\n┃ 》 𝚈𝚘𝚞𝚃𝚞𝚋𝚎:\n┃ @moisesyaurivilcacenteno3683\n┃\n┃ 》 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖:\n┃ ND\n╰══════•` 
global.author = ` ╭ ━═▣ 𝔹𝕣𝕒𝕤𝕙𝕜𝕚𝕖 ▣═━ ✓\n ┃\n ┃ 𒁈 𝙶𝚒𝚝𝙷𝚞𝚋:\n ┃ Brashkie\n ┃\n ┃ 𒁈 Mega Bot PRO.\n ┃\n ┃ ⚑ ApoyAlo en\n ┃ 》 𝙿𝚊𝚢𝙿𝚊𝚕:\n ┃ @OficialGD\n ╰══════•`

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > INFORMACIÓN DE VERSIONES DEL BOT, POR FAVOR 
// MANTENGA ESTO SIN MODIFICAR, NOS ESFORZAMOS A DIARIO POR OFRECERLES UN BOT PARA LA COMUNIDAD, SEA AGRADECIDO 😉
// [EN] > BOT VERSION INFORMATION, PLEASE KEEP THIS UNCHANGED, WE STRIVE DAILY TO PROVIDE YOU WITH A BOT FOR THE COMMUNITY, BE GRATEFUL
global.vs = "1.7.0"
global.vsJB = "5.0 (Beta)"
global.gt = "𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 "
global.imagen = fs.readFileSync('./Menu2.jpg')

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

global.rg = '╰〘✔〙*RESULTADO*〘✔〙╮\n\n'
global.resultado = rg

global.ag = '╰〘⚠️〙*ADVERTENCIA*〘⚠️〙╮\n\n'
global.advertencia = ag

global.iig = '╰〘❕〙*INFORMACION*〘〙╮\n\n'
global.informacion = iig

global.fg = '╰〘✖〙*ERROR*〘✖〙╮\n\n'
global.fallo = fg

global.mg = '╰〘🚩〙*LO PUSO MAL*〘🚩〙╮\n\n'
global.mal = mg

global.eeg = '╰〘✉︎〙*REPORTE*〘✉︎〙╮\n\n'
global.envio = eeg

global.eg = '╰〘✅〙*EXITO*〘✅〙╮\n\n'
global.exito = eg

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
global.wm = "𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶 | 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢"
global.igfg = "━═▣ 𝗛𝗲𝗽𝗲𝗶𝗻𝗕𝗼𝘁-𝗣𝗥𝗢 ▣═━"
global.nomorown = "51918340705"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰ RPG ❱
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "┌───── ◦ •『"
global.cmenub = "┊✦ "
global.cmenuf = "╚═════════─━─»◈\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙〘•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = ` ̰▦̰ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `🆃🅸🅼🅴 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
}}}


global.multiplier = 85 // Cuanto más alto, más difícil subir de nivel 

//Emojis RPG - Referencias
global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
    level: '🧬 Nivel : Level',
    limit: lenguajeGB.eDiamante(),
    exp: lenguajeGB.eExp(),
    bank: '🏦 Banco : Bank',
    diamond: lenguajeGB.eDiamantePlus(),
    health: '❤️ Salud : Health',
    kyubi: lenguajeGB.eMagia(),
    joincount: lenguajeGB.eToken(),
    emerald: lenguajeGB.eEsmeralda(),
    stamina: lenguajeGB.eEnergia(),
    role: '💪 Rango | Role',
    premium: '🎟️ Premium',
    pointxp: '📧 Puntos Exp : Point Xp',
    gold: lenguajeGB.eOro(),

    trash: lenguajeGB.eBasura(),
    crystal: '🔮 Cristal : Crystal',
    intelligence: '🧠 Inteligencia : Intelligence',
    string: lenguajeGB.eCuerda(),
    keygold: '🔑 Llave de Oro : Key Gold',
    keyiron: '🗝️ Llave de Hierro : Key Iron',
    emas: lenguajeGB.ePinata(),
    fishingrod: '🎣 Caña de Pescar : Fishing Rod',
    gems: '🍀 Gemas : Gemas',
    magicwand: '⚕️ Varita Mágica : Magic Wand',
    mana: '🪄 Hechizo : Spell',
    agility: '🤸‍♂️ Agilidad : Agility',
    darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
    iron: lenguajeGB.eHierro(),
    rock: lenguajeGB.eRoca(),
    potion: lenguajeGB.ePocion(),
    superior: '💼 Superior : Superior',
    robo: '🚔 Robo : Robo',
    upgrader: '🧰 Aumentar Mejora : Upgrade',
    wood: lenguajeGB.eMadera(),

    strength: '🦹‍ ♀️ Fuerza : Strength',
    arc: '🏹 Arco : Arc',
    armor: '🥼 Armadura : Armor',
    bow: '🏹 Super Arco : Super Bow',
    pickaxe: '⛏️ Pico : Peak',
    sword: lenguajeGB.eEspada(),

    common: lenguajeGB.eCComun(),
    uncoommon: lenguajeGB.ePComun(),
    mythic: lenguajeGB.eCMistica(),
    legendary: lenguajeGB.eClegendaria(),
    petFood: lenguajeGB.eAMascots(), //?
    pet: lenguajeGB.eCMascota(),//?

    bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),

    ayam: '🐓 Pollo : Chicken',
    babi: '🐖 Puerco : Pig',
    Jabali: '🐗 Jabalí : Wild Boar',
    bull: '🐃 Toro : Bull',    
    buaya: '🐊 Cocodrilo : Alligator',    
    cat: lenguajeGB.eGato(),    
    centaur: lenguajeGB.eCentauro(),
    chicken: '🐓 Pollo : Chicken',
    cow: '🐄 Vaca : Cow', 
    dog: lenguajeGB.ePerro(),
    dragon: lenguajeGB.eDragon(),
    elephant: '🐘 Elefante : Elephant',
    fox: lenguajeGB.eZorro(),
    giraffe: '🦒 Jirafa : Giraffe',
    griffin: lenguajeGB.eAve(), //Mascota : Griffin',
    horse: lenguajeGB.eCaballo(),
    kambing: '🐐 Cabra : Goat',
    kerbau: '🐃 Búfalo : Buffalo',
    lion: '🦁 León : Lion',
    money: lenguajeGB.eCoins(),
    monyet: '🐒 Mono : Monkey',
    panda: '🐼 Panda',
    snake: '🐍 Serpiente : Snake',
    phonix: '🕊️ Fénix : Phoenix',
    rhinoceros: '🦏 Rinoceronte : Rhinoceros',
    wolf: lenguajeGB.eLobo(),
    tiger: '🐅 Tigre : Tiger',
    cumi: '🦑 Calamar : Squid',
    udang: '🦐 Camarón : Shrimp',
    ikan: '🐟 Pez : Fish',

    fideos: '🍝 Fideos : Noodles',
    ramuan: '🧪 Ingrediente NOVA : Ingredients',
    knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase();
let emott = {
    level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
    diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
    emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
    pointxp: '📧', gold: '👑',

    trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
    keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
    mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
    potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',

    strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',

    common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',

    bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',

    ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
    centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
    fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
    horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
    snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
    wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',

    fideos: '🍝', ramuan: '🧪', knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emottt = {
    exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
    emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
    money: lenguajeGB.eCoins(), tiketcoin: lenguajeGB.eTickers(), stamina: lenguajeGB.eEnergia(),  
    potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
    rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
    coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
    eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
    sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
    umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
    pancing: lenguajeGB.eCanaPescar(),

    common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
    pet: lenguajeGB.eCMascota(),//?
    gardenboxs: lenguajeGB.eCJardineria(),//?
    legendary: lenguajeGB.eClegendaria(),

    anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),

    bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),

    centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
    fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
    anjing: lenguajeGB.ePerro(),

    petFood: lenguajeGB.eAMascots(), //?
    makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
    makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
    exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
    emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
    money: '🐱', tiketcoin: '🎫', stamina: '✨',

    potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
    rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
    coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',

    eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
    sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
    umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
    pancing: '🎣',

    common: '📦', uncoommon: '🥡', mythic: '🗳️',
    pet: '📫',//?
    gardenboxs: '💐',//?
    legendary: '🎁',

    anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',

    bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',

    centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',

    petFood: '🍖', //?
    makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
    makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// IDs de canales
global.ch = {
ch1: '120363197223158904@newsletter',
ch2: '120363197223158904@newsletter',
ch3: '120363197223158904@newsletter',
ch4: '120363197223158904@newsletter',
ch5: '120363197223158904@newsletter',
ch6: '120363197223158904@newsletter',
ch7: '120363197223158904@newsletter',
ch8: '120363197223158904@newsletter',
ch9: '120363197223158904@newsletter',
ch10: '120363197223158904@newsletter',
ch11: '120363197223158904@newsletter',
ch12: '120363197223158904@newsletter',
ch13: '120363197223158904@newsletter',
ch14: '120363197223158904@newsletter',
ch15: '120363197223158904@newsletter',
ch16: '120363197223158904@newsletter',
ch17: '120363197223158904@newsletter',
ch18: '120363197223158904@newsletter',
ch19: '120363197223158904@newsletter',
ch20: '120363197223158904@newsletter',
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})

global.yt = 'https://www.youtube.com/channel/UCKwgQ_LQgAlSmVrYHiHH_1Q'
global.ig = 'https://www.instagram.com/moisesyaurivilcacenteno/'
global.md = 'https://github.com/Brashkie/BrashkieBot-Hepein'
global.fb = 'https://www.facebook.com/moises.yaurivilca/'
global.tk = 'https://www.tiktok.com/@moises_yaurivilca'
global.ths = 'https://www.threads.net/@moisesyaurivilcacenteno'
global.paypal = 'https://paypal.me/BrashkieBot'
global.asistencia = 'https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW'
global.all = 'https://www.atom.bio'
global.canal1 = 'https://whatsapp.com/channel/0029Va8t5DZ9cDDU8ntWVJ2n'
global.canal2 = 'https://whatsapp.com/channel/0029Vb6k2rw5Ui2Ugtdf3M0r'
global.canal3 = 'https://whatsapp.com/channel/0029VbAu6rT6hENvmLkm5Y1c'
global.canal4 = 'https://whatsapp.com/channel/0029VbBJWhh0bIdk5iKYTX42'

global.soporteGB = "https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV"
global.grupo1 = "https://chat.whatsapp.com/Dzl78SFcnbfCcj0XbbjLYl"
global.grupo2 = "https://chat.whatsapp.com/HOuFyPPAQ6E24CL87EpPCe"
global.grupo_collab1 = "https://chat.whatsapp.com/D7rWtA4NPM2An3fP4axn0D"
global.grupo_collab2 = "https://chat.whatsapp.com/JrPYbBETich6HFYvLYq9Pf"
global.grupo_collab3 = "https://chat.whatsapp.com/JyPIlLE4gPg9XJkbUhBhHf"
global.grupo_collab4 = "https://chat.whatsapp.com/JyPIlLE4gPg9XJkbUhBhHf"
