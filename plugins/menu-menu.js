/*Fue creado por BrashkieBot*/

import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, participants, groupMetadata, text, command }) => {
    const { levelling } = '../lib/levelling.js'
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    let username = conn.getName(who)
    let user = global.db.data.users[m.sender]
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    if (command==='action' || command==='accion'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

 ══《☬ ANIME ☬》═══
*Comandos de acciones de anime*
(つ▀¯▀)つ━━━━━━━━━
𒆜Acaricia a alguien del servidor.
> ${usedPrefix}pat1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Abofetea a alguien que no te gusta... ¡Usa toda tu fuerza!
> ${usedPrefix}slap1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Golpea a alguien. D:
> ${usedPrefix}punch1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Besa a alguien.
> ${usedPrefix}kiss1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Muerde al usuario mencionado. O deja que yo te muerda. owo
> ${usedPrefix}bite1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Fastidia a alguien del servidor.
> ${usedPrefix}poke1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Un abracito? c:
Con este comando puedes abrazar a alguien.
> ${usedPrefix}hug1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dale de comer a un usuario, o deja que yo te dé de comer. n.n
> ${usedPrefix}feed1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Si odias deberias .... ¡MATAR >:v!
> ${usedPrefix}kill1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Moja a alguien. UwU
> ${usedPrefix}splash1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dile a un usuario Oniichan 👉👈
> ${usedPrefix}onichan1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Cura o revive a un ser querido uwu
> ${usedPrefix}heal1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Expresa que algo te causó gracia o te burlas de alguien.
> ${usedPrefix}laugh1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Patea a alguien.
> ${usedPrefix}kickbutt1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Besa a alguien en la mejilla.
> ${usedPrefix}kisscheeks1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Pellizca algunas mejillas.
> ${usedPrefix}cheeks1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Aplaude de algo o aplaude a alguien.
> ${usedPrefix}claps1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Disparale a alguien. D:
> ${usedPrefix}bang1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Lame a alguien.
> ${usedPrefix}lick1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Toma mi mano o la de un usuario.
> ${usedPrefix}handholding1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Despídete en general o de alguien específico.
> ${usedPrefix}bye1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Baila con alguien o conmigo
> ${usedPrefix}dance1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Saluda a un miembro
> ${usedPrefix}greet1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Patea brutalmente a un miembro
> ${usedPrefix}kick1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•

 ══《☬ KPOP & BTS ☬》═══
*Comandos de acciones de BTS&KPOP*
(つ▀¯▀)つ━━━━━━━━━
𒆜Besar a alguien
> ${usedPrefix}kiss2 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Abrazar a alguien
> ${usedPrefix}hug2 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•

    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    /*conn.sendButton(m.chat,['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/menu`], null, null, m)*/
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
    /*await await await conn.sendFile(m.chat, vn1, 'error.mp3', null, m, true, { 
        type: 'audioMessage', 
        ptt: true });*/ 
}

if (command==='reaction' || command==='reaccion'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

 ══《☬ ANIME ☬》═══
(つ▀¯▀)つ━━━━━━━━━
𒆜Come algo.
> ${usedPrefix}food1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Te vas ir a mimir
> ${usedPrefix}sleep1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Demuestra tu felicidad con una sonrisa.
> ${usedPrefix}happy1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Te pones trieste. u.u
> ${usedPrefix}sad1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Mostrar tu ira o enojo de algo
> ${usedPrefix}angry1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dile que te estas bañando uff
> ${usedPrefix}bath1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Estas progrmando?
> ${usedPrefix}code
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Saludar a los miembros
> ${usedPrefix}greet1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Por qué estás llorando?
> ${usedPrefix}cry1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¯\_(ツ)_/¯
> ${usedPrefix}shrug1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Risa malvada o diabolica
> ${usedPrefix}evilaugh1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Mover la cabeza :v
> ${usedPrefix}movehead1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Golpeate la cabeza.
> ${usedPrefix}banghead1
•═══◇◇•◇◇∘◇◇•◇◇═══•


 ══《☬ KPOP & BTS ☬》═══
𒆜Bailar
> ${usedPrefix}dance2
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Llorar por algo T_T
> ${usedPrefix}cry2
•═══◇◇•◇◇∘◇◇•◇◇═══•

    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

if (command==='info'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Į̵̧̗͈̜̹̲̬̜̀̅́͜Ń̶͎̭͖̞̻̙͙͋̕ͅF̶̙͆̐̋̍͗̎̓͌́͜O̴̥͒̀̀̆̑͊͑͛ ̵̧̜̙͇̤͍̩͖͛̀͜͝H̶̭̣̺̰͎̐̈̋͝E̷̲͉̬̰̦̺͙͌̓̔̓̄̒̽͘P̷̧͍̹̖̭̰̼̓̓̀̑Ȩ̸̝͓͙̰̀I̷̯̩̥͓̠͚̾̈́̽̏̋̌̎̚͜͜Ǹ̸͖̪͕̯͉̪͖̖̙̆͜B̸̧̳͓͈̖͎̿̒̇̓͐̕̚Ǭ̸͖̹͍̐̚T̸̛̛̯̺̯̜̥͚̖̯̒͆̒̏͒͗͜͠
(つ▀¯▀)つ━━━━━━━━━

╭══•> _INFO_ <•═══╮
> ${usedPrefix}cuentabrashkiebot | cuentasbb
> ${usedPrefix}gruposbb | grupos | groupbb
> ${usedPrefix}donar | donate
> ${usedPrefix}listagrupos | grouplist
> ${usedPrefix}estado | heybras | status
> ${usedPrefix}infobras | infobot
> ${usedPrefix}instalarbot | installbot
> ${usedPrefix}creador | owner
> ${usedPrefix}velocidad | ping
> _términos y condiciones_
> _Bot_
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

if (command==='fun'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄⊱
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄⊱

(つ▀¯▀)つ━━━━━━━━━
Ȩ̴̝̻͙̩͚̎N̸͚̹̺̼̥̥͔̱̣͇̒̀͐̆͋͋̈̃͘͠T̵̛̙͙̪̙̹̳̳̣̬͋̂̈́͝R̶̡͍̒̀ͅȨ̴̬̤͐̂͛͌̍̒N̶̡͇̗̻̽̽͆I̸͍͕̅M̴̰͔̞̒͗̈́̽̐̉̈́͆̉I̴̢͈̳̭͈̮̠̿͑̾͜͠E̵͍̩͙̺̟̗͗̈́͒̊͊̽̔̒͠ͅN̵̡̠̞͇̭̙̝͆ͅṰ̵̢̨̛͔̪̩̜̥͔̅̓͝O̷͔͓̎͜͠ͅ
(つ▀¯▀)つ━━━━━━━━━

╭══•> _ENTRETENIMIENTO_ <•═══╮
> ${usedPrefix}acertijo
> ${usedPrefix}palabra | ordenar
> ${usedPrefix}pelicula | adv
> ${usedPrefix}mates | matemáticas | math
> ${usedPrefix}ppt *piedra : papel : tijera*
> ${usedPrefix}lanzar *cara* | *cruz*
> ${usedPrefix}tictactoe | ttt *sala*
> ${usedPrefix}deltictactoe | delttt
> ${usedPrefix}sega @tag | pajear @tag
> ${usedPrefix}sorteo <texto>
> ${usedPrefix}formartrio
> ${usedPrefix}heroe
> ${usedPrefix}iqtest
> ${usedPrefix}casino
> ${usedPrefix}topgays
> ${usedPrefix}toptonto
> ${usedPrefix}tophorribles
> ${usedPrefix}topfiel
> ${usedPrefix}tophacker
> ${usedPrefix}topvirgen
> ${usedPrefix}topinfiel
> ${usedPrefix}topodio
> ${usedPrefix}topamor
> ${usedPrefix}topvago
> ${usedPrefix}topchambeo
> ${usedPrefix}topnegro
> ${usedPrefix}topculon
> ${usedPrefix}topdrogo
> ${usedPrefix}topotakus
> ${usedPrefix}topcallados
> ${usedPrefix}tophacker
> ${usedPrefix}topinfiel
> ${usedPrefix}toppajer@s
> ${usedPrefix}topput@s 
> ${usedPrefix}topvillan@
> ${usedPrefix}topalt@
> ${usedPrefix}topmamadisim@
> ${usedPrefix}tops <texto>
> ${usedPrefix}topintegrantes | topintegrante
> ${usedPrefix}toplagrasa | topgrasa_
> ${usedPrefix}toppanafrescos | toppanafresco
> ${usedPrefix}topshiposters | topshipost
> ${usedPrefix}toplindos | toplind@s 
> ${usedPrefix}topfamosos | topfamos@s
> ${usedPrefix}topparejas | top5parejas 
> ${usedPrefix}gay | gay *@tag*
> ${usedPrefix}calzon *@tag*
> ${usedPrefix}caliente *@tag*
> ${usedPrefix}techo *@tag*
> ${usedPrefix}delicioso *@tag*
> ${usedPrefix}gay2 *nombre : @tag*
> ${usedPrefix}lesbiana *nombre : @tag*
> ${usedPrefix}manca *nombre : @tag*
> ${usedPrefix}manco *nombre : @tag*
> ${usedPrefix}pajero *nombre : @tag*
> ${usedPrefix}pajera *nombre : @tag*
> ${usedPrefix}puto *nombre : @tag*
> ${usedPrefix}puta *nombre : @tag*
> ${usedPrefix}rata *nombre : @tag*
> ${usedPrefix}love *nombre : @tag*
> ${usedPrefix}ship | shipear *nombre1 nombre2*
> ${usedPrefix}doxear *nombre : @tag*
> ${usedPrefix}doxxeame
> ${usedPrefix}apostar | slot *cantidad*
> ${usedPrefix}pregunta *texto*
> ${usedPrefix}formarpareja
> ${usedPrefix}dado
> ${usedPrefix}verdad
> ${usedPrefix}reto
> ${usedPrefix}juegos
> ${usedPrefix}edufrase
> ${usedPrefix}animes
╰═════•>☘<•═════╯

╭══•> _OTROS_ <•═══╮
> ${usedPrefix}simpcard *@tag*
> ${usedPrefix}hornycard *@tag*
> ${usedPrefix}lolice *@tag*
> ${usedPrefix}ytcomment *texto*
> ${usedPrefix}itssostupid
> ${usedPrefix}pixelar
> ${usedPrefix}blur
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

if (command==='config'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ć̶̢͎̩͐͝O̸̪̖͔͓̝̽̐̆̓̐͐̚͠ͅN̸̢̯̘̞̫̻͎̓̓͑̓͌͒͠F̴̥͎̬̳̼̪̩̜̓́̄̅͑͊̆̑I̵͙͆̍̄̆̽̃ͅG̵̞͎̰̞̐̈́̀̑̕͝Ũ̵̡̠̺̠̮̘͇̼̹̯͠R̵̝͍̼̻͖̜͈̱̹̒̀͗̋̃̔͆̾̇̓Ả̸̭̬͚͗C̷̗̫̭̲̬̈́̔̓͐Ị̴̻̗̮̝͂͗̒͑͝O̵̪͇̬͙̰͐̃̓͊̓̈̚͜͠N̵͉̠͔̱͕͔͓͙̋̓
(つ▀¯▀)つ━━━━━━━━━

╭══•> AJUSTES EN CHATS/GRUPOS <•═══╮
> ${usedPrefix}on *:* off *bienvenida | welcome*
> ${usedPrefix}on *:* off *avisos | detect*
> ${usedPrefix}on *:* off *autonivel | autolevelup*
> ${usedPrefix}on *:* off *restringir | restrict*
> ${usedPrefix}on *:* off *antillamar | anticall*
> ${usedPrefix}on *:* off *publico | public*
> ${usedPrefix}on *:* off *autovisto | autoread*
> ${usedPrefix}on *:* off *temporal*
> ${usedPrefix}on *:* off *stickers*
> ${usedPrefix}on *:* off *autosticker*_
> ${usedPrefix}on *:* off *reacciones | reaction*
> ${usedPrefix}on *:* off *audios*
> ${usedPrefix}on *:* off *modocaliente | modohorny*
> ${usedPrefix}on *:* off *antitoxicos | antitoxic*
> ${usedPrefix}on *:* off *antiver | antiviewonce* 
> ${usedPrefix}on *:* off *antieliminar | antidelete*
> ${usedPrefix}on *:* off *antinternacional | antifake*
> ${usedPrefix}on *:* off *antienlace | antilink*
> ${usedPrefix}on *:* off *antienlace2 | antilink2*
> ${usedPrefix}on *:* off *antitiktok | antitk*
> ${usedPrefix}on *:* off *antiyoutube | antiyt*
> ${usedPrefix}on *:* off *antitelegram | antitel*
> ${usedPrefix}on *:* off *antifacebook | antifb*
> ${usedPrefix}on *:* off *antinstagram | antig*
> ${usedPrefix}on *:* off *antitwitter | antitw*
> ${usedPrefix}on *:* off *soloprivados | pconly*
> ${usedPrefix}on *:* off *sologrupos | gconly*
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

if (command==='nsfw'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
+̵̡̛̰̠1̷̢͚̥̮̞̘̩͕̐̉͊͝8̴̘̝̟̭̒
(つ▀¯▀)つ━━━━━━━━━

╭══•> _NSFW_ <•═══╮
> Ver menu para mayores de 18
> ${usedPrefix}hornymenu
> ${usedPrefix}rule34 <text>
> ${usedPrefix}pack
> ${usedPrefix}pack2
> ${usedPrefix}pack3
> ${usedPrefix}videosxxx
> ${usedPrefix}videosxxxlesbi
╰═════•>☘<•═════╯

 ══《☬ +18 ☬》═══
*Comandos de acciones de anime +18*
(つ▀¯▀)つ━━━━━━━━━
𒆜Dale una nalgada a alguien. -_-
> ${usedPrefix}spank *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Agarra las tetas a un miembro :v
> ${usedPrefix}grabtits *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿A quien quieres follar? ._.
> ${usedPrefix}fuck *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Follar en su ano
> ${usedPrefix}anal *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Haz el 69 a un miembro
> ${usedPrefix}69 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
}

if (command==='currency'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
D̵̙͇̗̮̪̳̒̀͒̈́́̀̄Ǐ̶̩N̸̫͓͓̲̘̳̐͋͗̌̉͜͝͝͠ͅĘ̵̢̨̻̼̲͖̬̅R̶̙̍̂O̶̞̫̫̐͂́͒͘
(つ▀¯▀)つ━━━━━━━━━

╭══•> RPG SUBIR DE NIVEL <•═══╮
> ${usedPrefix}botemporal *enlace* *cantidad*
> ${usedPrefix}addbot *enlace* *cantidad*
> ${usedPrefix}pase premium
> ${usedPrefix}pass premium
> ${usedPrefix}listapremium | listprem
> ${usedPrefix}transfer *tipo cantidad @tag*
> ${usedPrefix}dar *tipo cantidad @tag*
> ${usedPrefix}enviar *tipo cantidad @tag*
> ${usedPrefix}balance
> ${usedPrefix}cartera | wallet 
> ${usedPrefix}experiencia | exp
> ${usedPrefix}top | lb | leaderboard
> ${usedPrefix}nivel | level | lvl
> ${usedPrefix}rol | rango
> ${usedPrefix}inventario | inventory
> ${usedPrefix}aventura | adventure 
> ${usedPrefix}caza | cazar | hunt
> ${usedPrefix}pescar | fishing
> ${usedPrefix}animales 
> ${usedPrefix}alimentos
> ${usedPrefix}curar | heal
> ${usedPrefix}buy
> ${usedPrefix}sell
> ${usedPrefix}verificar | registrar
> ${usedPrefix}perfil | profile
> ${usedPrefix}myns
> ${usedPrefix}unreg *numero de serie*
> ${usedPrefix}minardiamantes | minargemas
> ${usedPrefix}minargatacoins | minarcoins
> ${usedPrefix}minarexperiencia | minarexp
> ${usedPrefix}minar *:* minar2 *:* minar3
> ${usedPrefix}reclamar | regalo | claim
> ${usedPrefix}cadahora | hourly
> ${usedPrefix}cadasemana | semanal | weekly
> ${usedPrefix}cadames | mes | monthly
> ${usedPrefix}cofre | abrircofre | coffer
> ${usedPrefix}trabajar | work
> ${usedPrefix}deposit
> ${usedPrefix}bank
> ${usedPrefix}retirar
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }

  if (command==='animeb'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ą̸̯̘̞̙͎̝̫͎͈̎̋̆́́̕N̴̹̘͈̺̠̅͊̉͒͐̿͂̀̕͠Į̵̠̼̣̠̝̂̿M̴͚̪̼͑͛̑̀̄̔̄͝Ẽ̸̼̥̥̺̬̐̅S̶̖̓̆͂̕ ̷̹͙͔̝͓̲͕͙͓̔͐̃͑̋͂Y̷̺̮͉̮̲̦̹̣̲͇̅́̊̌̉̔̊͌̒͋ ̵͚͇̠̓̊͌Ȏ̴͎̗̞̣̺T̵̡̡̗͙̬͉͎̽̇̊͆̆̈́͛̽̚̚͜ͅR̵̛̳̂̎̈́S̸͔̼̟̙̰̝̎̐͐
(つ▀¯▀)つ━━━━━━━━━

╭══•> IMGNS ANIME Y MAS <•═══╮
> ${usedPrefix}chica 
> ${usedPrefix}chico
> ${usedPrefix}cristianoronaldo
> ${usedPrefix}messi
> ${usedPrefix}meme
> ${usedPrefix}meme2
> ${usedPrefix}itzy
> ${usedPrefix}blackpink
> ${usedPrefix}kpop *blackpink : exo : bts*
> ${usedPrefix}lolivid
> ${usedPrefix}loli
> ${usedPrefix}navidad
> ${usedPrefix}ppcouple
> ${usedPrefix}neko
> ${usedPrefix}waifu
> ${usedPrefix}akira
> ${usedPrefix}akiyama
> ${usedPrefix}anna
> ${usedPrefix}asuna
> ${usedPrefix}ayuzawa
> ${usedPrefix}boruto
> ${usedPrefix}chiho
> ${usedPrefix}chitoge
> ${usedPrefix}deidara
> ${usedPrefix}erza
> ${usedPrefix}elaina
> ${usedPrefix}eba
> ${usedPrefix}emilia
> ${usedPrefix}hestia
> ${usedPrefix}hinata
> ${usedPrefix}inori
> ${usedPrefix}isuzu
> ${usedPrefix}itachi
> ${usedPrefix}itori
> ${usedPrefix}kaga
> ${usedPrefix}kagura
> ${usedPrefix}kaori
> ${usedPrefix}keneki
> ${usedPrefix}kotori
> ${usedPrefix}kurumi
> ${usedPrefix}madara
> ${usedPrefix}mikasa
> ${usedPrefix}miku
> ${usedPrefix}minato
> ${usedPrefix}naruto
> ${usedPrefix}nezuko
> ${usedPrefix}sagiri
> ${usedPrefix}sasuke
> ${usedPrefix}sakura
> ${usedPrefix}cosplay
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }


  if (command==='marriage'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
M̷̧̰̬͙̘̺̱͍͆͑A̸̫͙̬̬͈̕͝R̴̢̟̥̰̰̼̥̀̽̔͘R̶̢̲͆͌͐̿̐̋Į̶̜̼̟̘͖̫̾̈͑͆̈́À̶̖̿̉̊͘Ǵ̵̨̀̾̿̓̈̂͘E̷̟̎̽͛̂̍͒͗
(つ▀¯▀)つ━━━━━━━━━

╭══•> PAREJAS <•═══╮
> Ver parejas o unir
> ${usedPrefix}listaparejas | listship
> ${usedPrefix}mipareja | mylove
> ${usedPrefix}pareja | couple *@tag*
> ${usedPrefix}aceptar | accept *@tag*
> ${usedPrefix}rechazar | decline *@tag*
> ${usedPrefix}terminar | finish *@tag*
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }


  if (command==='misc'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ṁ̴͖̙̭̺̠̟͇̠̯͋̅̐̿̊̏͋Ī̷̠͇͕̲̑͂̓͊͝S̷̨̝̙͔̙̩͎̜̄̾̍̈́̍͐͂͜ͅĊ̵̭͎͒
(つ▀¯▀)つ━━━━━━━━━

╭══•> MCJAVA <•═══╮
➽ Mira los jugadores de Minecraft Java
> ${usedPrefix}mcavatar *nombrejugador*
> ${usedPrefix}mchead *nombrejugador*
> ${usedPrefix}mcbody *nombrejugador*
> ${usedPrefix}mcskin *nombrejugador*
> ${usedPrefix}mcuuid *nombrejugador*
╰═════•>☘<•═════╯

╭══•> MCBEDROCK <•═══╮
➽  Mira los jugadores de Minecraft Berdrok
> ${usedPrefix}minecraftacc
> ${usedPrefix}mcachievement <gamertag>
> ${usedPrefix}mcsearch <gamertag>
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }

  if (command==='utility'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
U̴̧̫͙͕̘̥̜̳̳͇̇̃̋̓̂͋͗͘͝Ť̷̥͕̖̣́̕͘Ĭ̸͙̥̩͇̀̄̊̾̂̅̓͘͘L̴̢̑̒́̔̀̒̒Į̴̖͚̲̖̞͐͐̐̒͂̾̕D̸̢̡̥͖̲̭̳̠̪̀͊̈́̊͌̋̍͝Ȁ̵̢̡̮̦̟̱̺̹̦̇̽̽̀̈́̄͗͋Ḏ̷̞̮͐͆E̸̛̠̎̌͛͝͠S̵̘͐̄͗͌́͜
(つ▀¯▀)つ━━━━━━━━━

╭══•> PARA PROPIETARIOS <•═══╮
> Para propietarios y grupos
> ${usedPrefix}join *enlace*
> ${usedPrefix}unete *enlace*
> ${usedPrefix}dardiamantes *cantidad*
> ${usedPrefix}darxp *cantidad*
> ${usedPrefix}darkatacoins *cantidad* 
> ${usedPrefix}addprem | userpremium *@tag* *cantidad*
> ${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*
> ${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*
> ${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*
> ${usedPrefix}idioma | language
> ${usedPrefix}cajafuerte
> ${usedPrefix}comunicar | broadcastall | bc *texto*
> ${usedPrefix}broadcastchats | bcc *texto*
> ${usedPrefix}comunicarpv *texto*
> ${usedPrefix}broadcastgc *texto* 
> ${usedPrefix}comunicargrupos *texto*
> ${usedPrefix}borrartmp | cleartmp
> ${usedPrefix}delexp *@tag*
> ${usedPrefix}delkatacoins *@tag*
> ${usedPrefix}deldiamantes *@tag*
> ${usedPrefix}reiniciar | restart
> ${usedPrefix}ctualizar | update
> ${usedPrefix}addprem | +prem *@tag*
> ${usedPrefix}delprem | -prem *@tag*
> ${usedPrefix}listapremium | listprem
> ${usedPrefix}añadirdiamantes *@tag cantidad*
> ${usedPrefix}añadirxp *@tag cantidad*
> ${usedPrefix}añadirkatacoins *@tag cantidad*
╰═════•>☘<•═════╯

╭══•> *IA HEPEIN* <•═══╮
> puedes buscar lo que deseas usando
> ${usedPrefix}simi | ia *texto*
> ${usedPrefix}alexa | siri | cortana *texto*
> ${usedPrefix}simsimi | bixby *texto*
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  } 


  if (command==='musicc'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
M̵̧̳͈̼̖̎̂̅̎͑Ư̸̳̼̖̹̳͕̋̋̇͜Ş̵̛̠̊̍͠͠Ī̴̧̩̩̹̹̞͖̬̑̈̈́͊́͋̔͠͝Ĉ̸͓͋̿̑͛͆͛̚Ã̸͙̦̜̫͙͈̲̠͊ ̸͇͓̔͝Y̷̖͓̞͇̙̯̳̥̳̊̎͛͗̂̊̍͊̕̕ ̵̢͓͕̞͐̾̈́̈́Ẻ̴̺̩̉̂̽̃́̔̓̋͠D̷̛̠̤͍̯͚͂̇̇́͜͠Ï̵̪̫̞̻͙̮͊͗̆͊C̷̨͍̊͗̍͐̍Í̷͇͎̺͉̂̿́̒̇̽͌͜Ő̶̧̦͔̮̥̞̦̟̾̍̈́̓ͅͅN̵̢̹͔͈̻͛͊̌͘
(つ▀¯▀)つ━━━━━━━━━

╭══•> MODIFICAR AUDIOS <•═══╮
> Modificar audio
> ${usedPrefix}bass
> ${usedPrefix}blown
> ${usedPrefix}deep
> ${usedPrefix}earrape
> ${usedPrefix}fat
> ${usedPrefix}fast
> ${usedPrefix}nightcore
> ${usedPrefix}reverse
> ${usedPrefix}robot
> ${usedPrefix}slow
> ${usedPrefix}smooth
> ${usedPrefix}tupai
╰═════•>☘<•═════╯

╭══•> MENU AUDIOS <•═══╮
> Menu de audios
> ${usedPrefix}audios
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }


  if (command==='utility2'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ū̵̧̢̯͕̦̅͆̾͝T̷̥̮̟̹͂̂̓̊̿͆̕̕I̴̩̳͎̫̰͒̄̔̈́͂̔Ļ̸̢̤͚̤͚͈̣͚̀͒̃̌̈́͊͌́̚Ȉ̶̝̱̥̯̏̈́̇́͂̑D̴̢̛̘̰̦̩̝̰̈͌̽A̷̻͇̺̼̯͓̟̠̥̦͌͌͐͋̅D̵͙̟̖̗̞̊́͋͋͂ ̷̧̩̰̣͑͐̎̊̈̌̉2̸̨̣̠̲́̎̃
(つ▀¯▀)つ━━━━━━━━━

╭══•> _DESCARGAS_ <•═══╮
> ${usedPrefix}imagen | image *texto*
> ${usedPrefix}pinterest | dlpinterest *texto*
> ${usedPrefix}wallpaper|wp *texto*
> ${usedPrefix}play | play2 *texto o link*
> ${usedPrefix}play.1 *texto o link*
> ${usedPrefix}play.2 *texto o link* 
> ${usedPrefix}ytmp3 | yta *link*
> ${usedPrefix}ytmp4 | ytv *link*
> ${usedPrefix}pdocaudio | ytadoc *link*
> ${usedPrefix}pdocvieo | ytvdoc *link*
> ${usedPrefix}tw |twdl | twitter *link*
> ${usedPrefix}facebook | fb *link*
> ${usedPrefix}instagram *link video o imagen*
> ${usedPrefix}verig | igstalk *usuario(a)*
> ${usedPrefix}ighistoria | igstory *usuario(a)*
> ${usedPrefix}tiktok *link*
> ${usedPrefix}tiktokimagen | ttimagen *link*
> ${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*
> ${usedPrefix}vertiktok | tiktokstalk *usuario(a)*
> ${usedPrefix}mediafire | dlmediafire *link*
> ${usedPrefix}clonarepo | gitclone *link*
> ${usedPrefix}clima *país ciudad*
> ${usedPrefix}consejo
> ${usedPrefix}morse codificar *texto*
> ${usedPrefix}morse decodificar *morse*
> ${usedPrefix}fraseromantica
> ${usedPrefix}historia
╰═════•>☘<•═════╯

╭══•> _Chat Anonimo_ <•═══╮
> Podras enviar mensajes a otra persona usando a HepeinBot
> ${usedPrefix}chatanonimo | anonimochat
> ${usedPrefix}anonimoch
> ${usedPrefix}start
> ${usedPrefix}next
> ${usedPrefix}leave
╰═════•>☘<•═════╯

╭══•> CONVERTIDORES <•═══╮
> Convertirlo cualquier archivo
> ${usedPrefix}toimg | img | jpg *sticker* 
> ${usedPrefix}toanime | jadianime *foto*
> ${usedPrefix}tomp3 | mp3 *video o nota de voz*
> ${usedPrefix}tovn | vn *video o audio*
> ${usedPrefix}tovideo *audio*
> ${usedPrefix}tourl *video, imagen*
> ${usedPrefix}toenlace  *video, imagen o audio*
> ${usedPrefix}tts es *texto*
╰═════•>☘<•═════╯

 
╭══•> OTHERS <•═══╮
> Ver logos o menu
> ${usedPrefix}logos *efecto texto*
> ${usedPrefix}menulogos2
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  } 

  if (command==='tools'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ṁ̴͖̙̭̺̠̟͇̠̯͋̅̐̿̊̏͋Ī̷̠͇͕̲̑͂̓͊͝S̷̨̝̙͔̙̩͎̜̄̾̍̈́̍͐͂͜ͅĊ̵̭͎͒
(つ▀¯▀)つ━━━━━━━━━

╭══•> HERRAMIENTAS <•═══╮
> Herramientas para el miembro
> ${usedPrefix}afk *motivo*
> ${usedPrefix}acortar *url*
> ${usedPrefix}calc *operacion math*
> ${usedPrefix}del *respondre a mensaje del Bot*
> ${usedPrefix}qrcode *texto*
> ${usedPrefix}readmore *texto1|texto2*
> ${usedPrefix}spamwa *numero|texto|cantidad*
> ${usedPrefix}styletext *texto*
> ${usedPrefix}traducir *texto*
> ${usedPrefix}morse codificar *texto*
> ${usedPrefix}morse decodificar *morse*
> ${usedPrefix}encuesta | poll *Motivo*
> ${usedPrefix}horario
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }

  if (command==='animalss'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ṁ̴͖̙̭̺̠̟͇̠̯͋̅̐̿̊̏͋Ī̷̠͇͕̲̑͂̓͊͝S̷̨̝̙͔̙̩͎̜̄̾̍̈́̍͐͂͜ͅĊ̵̭͎͒
(つ▀¯▀)つ━━━━━━━━━

╭══•> ANIMALES <•═══╮
➽ Ver imagenes de animales
> ${usedPrefix}animals fox
> ${usedPrefix}animals cat
> ${usedPrefix}animals bird
> ${usedPrefix}animals panda
> ${usedPrefix}animals red_panda
> ${usedPrefix}animals racoon
> ${usedPrefix}animals koala
> ${usedPrefix}animals kangaroo
> ${usedPrefix}animals whale
> ${usedPrefix}animals dog
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }

  if (command==='mbirthday'){
    let toUser = `${m.sender.split("@")[0]}`
    let menu = `
╭┄〚 *${wm}* 〛┄₪
┊➽ *${week}, ${date}*
┊➽ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊➽ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊➽ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊➽ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
┊➽ @${toUser}
╰┄┄┄┄〚 *${vs}* 〛┄┄┄┄₪

(つ▀¯▀)つ━━━━━━━━━
Ṁ̴͖̙̭̺̠̟͇̠̯͋̅̐̿̊̏͋Ī̷̠͇͕̲̑͂̓͊͝S̷̨̝̙͔̙̩͎̜̄̾̍̈́̍͐͂͜ͅĊ̵̭͎͒
(つ▀¯▀)つ━━━━━━━━━

╭══•> BIRTHDAY <•═══╮
➽ Configura tu fecha
> ${usedPrefix}setbirthday dd/mm/aaaa
> ${usedPrefix}removebirthday
╰═════•>☘<•═════╯
    `
    const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4']
    
    
    await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })
  }


}

handler.command = handler.help = ['action','reaction','info','fun','config','nsfw','currency','animeb','marriage','misc','utility','musicc','utility2','tools','animalss','mbirthday']
handler.tags = ['simbols']
export default handler
