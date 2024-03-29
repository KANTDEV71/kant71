const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { samsamsung } = require('./src/samsamsung')
const { meme } = require('./src/meme')
const { sampld } = require('./src/sampld')
const { dono } = require('./src/dono')
const { putalx } = require('./src/putalx')
const { utils } = require('./src/utils')
const { webp2gifFile } = require("./lib/gif.js")
const { modapk } = require('./src/modapk')
const { pack18 } = require('./src/pack18')
const { imunes } = require('./src/imunes')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:meu criador\n' // Seu nome
            + 'ORG:𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉ofc;\n' // Nome do bot
            + 'TEL;type=CELL;type=VOICE;waid=556699324075:+55 66 9932-4075\n' //Seu número Whatsapp
            + 'END:VCARD'
prefix = setting.prefix
blocked = []

     //_ARQUIVOS ANTIS
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
//_FIM DOS ARQUIVOS ANTIS

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o codigo com whatsapp web no numero do seu bot'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando qrcode...')
	})
	client.on('open', () => {
		success('2', 'Prontinho conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
			    }
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐧𝐚𝐨 𝐬𝐞𝐫 𝐛𝐚𝐧𝐢𝐝𝐨❤️`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `  
    .      　。　　　　•　    　ﾟ　　。
    　　.　　　.　　　  　　.　　　　　。　　   。　.
    　.　　      。　        ඞ   。　    .    •
    •            @${num.split('@')[0]}was E j e c t e d
                      1 impostor restante   。　.
    　 　　。　　 　　　　ﾟ　　　.　      　　
𝐀𝐯𝐢𝐬𝐨 𝐩𝐚𝐫𝐚 𝐯𝐨𝐜𝐞 𝐪𝐮𝐞 𝐬𝐚𝐢𝐮 @${num.split('@')[0]} VAI PELAS SOMBRAS FUCK`
				        
    
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Estou fazendo ⌛',
				success: '✔️ Deu certo ✔️',
				error: {
					stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '❌ Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					ownerG: '❌ Este comando só pode ser usado pelo dono! ❌',
					ownerB: '❌ Este comando só pode ser usado pelo meu dono! ❌',
					admin: '❌ Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // substitua isso pelo seu número
            const mod = [ownerNumber,"${setting.mod}@s.whatsapp.net"]//mude o seu numero
            const adminbotnumber = ["${setting.adminbotnumber}@s.whatsapp.net"]//mude o seu numero
			const frendsowner = ["${setting.frendsowner}@s.whatsapp.net"]//mude o seu numero
            const premium = ["556699324075@s.whatsapp.net","5571982507697@s.whatsapp.net","556699324075@s.whatsapp.net","${setting.vip4}@s.whatsapp.net","${setting.vip5}@s.whatsapp.net","${setting.vip6}@s.whatsapp.net","${setting.vip7}@s.whatsapp.net","${setting.vip8}@s.whatsapp.net","${setting.vip9}@s.whatsapp.net","${setting.vip10}@s.whatsapp.net",]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const isPremium = premium.includes(sender)
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isBanned = ban.includes(sender)
         //   pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefinedconst ismod = mod.includes(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
            if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

			function addMetadata(packname, author) {	
				if (!packname) packname = '𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉🐊 𝑩𝑶𝑻'; if (!author) author = '𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉🐊';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": kant,
					"sticker-pack-publisher": kantls,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
				
}
			switch(command) {
case  'rename':

		    		if (!isQuotedSticker) return reply('Apenas figurinha tio')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `sagate`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break
///_BY ZORO
case 'logo1':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('🛑O texto é grande demais máximo 10 caracterís 🛑')
					reply('*⏳Estou fazendo, se der erro tente novamente!⏳“*')
					buffer = await getBuffer(`https://ietostut.sirv.com/Screenshot_20210706-152232~3.png?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-35%25&text.0.size=24&text.0.color=000000&text.0.opacity=69&text.0.font.family=Acme&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '✔️ PRONTINHO✔️'})
					break
case 'xxx1':
tujuh = fs.readFileSync('./assets/xxx1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./assets/xxx2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx3':
tujuh = fs.readFileSync('./assets/xxx3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx4':
tujuh = fs.readFileSync('./assets/xxx4.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx5':
tujuh = fs.readFileSync('./assets/xxx5.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say1':
tujuh = fs.readFileSync('./assets/say1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
tujuh = fs.readFileSync('./assets/say2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
tujuh = fs.readFileSync('./assets/say3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say4':
tujuh = fs.readFileSync('./assets/say4.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say5':
tujuh = fs.readFileSync('./assets/say5.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime1':
tujuh = fs.readFileSync('./assets/anime1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime2':
tujuh = fs.readFileSync('./assets/anime2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime3':
tujuh = fs.readFileSync('./assets/anime3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime4':
tujuh = fs.readFileSync('./assets/anime4.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime5':
tujuh = fs.readFileSync('./assets/anime5.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime1':
tujuh = fs.readFileSync('./assets/anime1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'belle1':
tujuh = fs.readFileSync('./assets/belle1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'anime1':
tujuh = fs.readFileSync('./assets/anime1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'teto1':
tujuh = fs.readFileSync('./assets/teto1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'teto2':
tujuh = fs.readFileSync('./assets/teto2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'teto3':
tujuh = fs.readFileSync('./assets/teto3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'superficial':
tujuh = fs.readFileSync('./assets/superficial.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'banhodeleite':
tujuh = fs.readFileSync('./assets/banhodeleite.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'akflamengo':
tujuh = fs.readFileSync('./assets/akflamengo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'kalidade':
tujuh = fs.readFileSync('./assets/kalidade.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'm4':
tujuh = fs.readFileSync('./assets/m4.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'mcbrinquedo':
tujuh = fs.readFileSync('./assets/mcbrinquedo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'soldado':
tujuh = fs.readFileSync('./assets/soldado.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'akflamengo':
tujuh = fs.readFileSync('./assets/akflamengo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'banhodeleite':
tujuh = fs.readFileSync('./assets/banhodeleite.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'akflamengo':
tujuh = fs.readFileSync('./assets/akflamengo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'kalidade':
tujuh = fs.readFileSync('./assets/kalidade.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'm4':
tujuh = fs.readFileSync('./assets/m4.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'mcbrinquedo':
tujuh = fs.readFileSync('./assets/mcbrinquedo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'soldado':
tujuh = fs.readFileSync('./assets/soldado.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'ondesoucria':
tujuh = fs.readFileSync('./assets/ondesoucria.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'yamete':
tujuh = fs.readFileSync('./assets/yamete.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'onich':
tujuh = fs.readFileSync('./assets/onich.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', ptt:true})
break
case 'dono':
		client.sendMessage(from, dono(prefix, sender), text, {quoted: mek})
                break
case 'meme':
		client.sendMessage(from, meme(prefix, sender), text, {quoted: mek})
                break
//FIM BY ZORO
case 'attp1':	//@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':	//@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': //@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': //@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5'://@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	//@Kratos æ„›
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kant*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	 
case 'wikipedia':
 //@Kratos 
	 teks = body.slice(11)
	send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
	teks = ` ${send.result.result}`
	client.sendMessage(from, teks, text, {quoted: mek})
	break

case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
						reply('O recurso anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
						reply('O recurso anti-link desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
case 'pinterest':
					//@Kratos 
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(11)}}`)				
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})			
					break 
case 'play10':   
//@Kratos 
				reply(mess.wait)
				const play = body.slice(8)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				//infomp3 = ` \n\n:\n ${anu.result.title}\n:${anu.result.source}\n: ${anu.result.size}`				
				buffer = await getBuffer(anu.result.thumbnail)
			//	client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
//client.sendMessage(from, buffer, image, {quoted: download1, caption: infomp3})
	client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.source}.mp3`, quoted: download})
				break
///_FIM BY KRATOS
case 'play0':
reply(mess.wait)
play = body.slice(7)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/play2?query=${play}`)
info =  `*MUSICA ENCONTRADA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.result.url}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_audio)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break

case 'play02':
reply(mess.wait)
play = body.slice(8)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
info = `MUSICA ENCONTRADA!!!\nTitulo ${msc.result.title}\nFonte:${msc.result.source}\nTamanho:${msc.result.size}`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_video)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break              

case 'playurl':
reply(mess.wait)
play = body.slice(9)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytmp3?url=${play}`)
info =  `*MUSICA ENCONTRADA!!!*\nTítulo : ${msc.result.title}\nFonte : Youtube\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.dl_link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break              

case 'mp4url':
reply(mess.wait)
play = body.slice(9)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytmp4?url=${play}`)
info =  `*VIDEO ENCONTRADO!!!*\nTítulo : ${msc.result.title}\nFonte : Youtube\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.dl_link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break              
        
case 'ttp':
if (args.length < 1) return reply(`ERROR: kd o texto?? \nUso: ${prefix}ttp (seu texto aqui)`)
try {var chollotxt = body.slice(5).trim()
reply(mess.wait)
url = encodeURI(`https://api.xteam.xyz/ttp?file&text=${chollotxt}`)
textofigu = await getBuffer(url)
client.sendMessage(from, textofigu, sticker, { quoted: mek })
}
catch (e) {
reply("Error: Use apenas caracteres alfanuméricos")
}
break
case 'bugreport':
const bug = body.slice(10)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: wa.me/${sender.split("557182507697@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('557182507697@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
				//_MENUS
case 'bateria':
  const charg = ["carregando "," carregando "," carregando "," carregando "," carregando "," desconectado "]
chargo = charg[Math.floor(Math.random() * charg.length)]
let batans = global.batrei[global.batrei.length - 1]
  batter =`
  •🔋 : ${batans}%
  • 🔌 : ${chargo}`
  client.sendMessage(from, batter, text, {quoted: mek})
  break
				case 'help':
				case 'menu':
		client.sendMessage(from, help(pushname,prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚 𝐛𝐲 𝐳𝐨𝐫𝐨", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack18(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "By ZORO", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'putalx':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, putalx(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "By ZORO", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'utils':
		client.sendMessage(from, utils(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Utilizaveis", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'modapk':
               if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, modapk(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Apks premium", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'imunes':
					client.sendMessage(from, imunes(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Imunidade 999+", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
				//_DONO
				case 'delete':
				case 'del':
				case 'd':  
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'clearall':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝑻𝑹𝑨𝑺𝑴𝑰𝑺𝑺𝑨𝑶 𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝑻𝑹𝑨𝑺𝑴𝑰𝑺𝑺𝑨𝑶 𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
case 'aviso':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐀𝐯𝐢𝐬𝐨 𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝑨𝑽𝑰𝑺𝑶 𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉 ]\n\n${body.slice(7)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
case 'divulgar':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝒁𝒐𝒓𝒐 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝑆𝐴𝐺𝐴𝑇𝐸 𝑇𝑉 ]\n\n${body.slice(10)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
                 //_RANKS E %
case '%gay':		
	            	if (args.length < 1) return reply('marque os gay do gp!')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { quoted: mek })
					break
case '%feio':		
	            	if (args.length < 1) return reply('marque alguem fei que doi!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é feio: *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { quoted: mek })
					break
case '%lindo':		
	            	if (args.length < 1) return reply('marque alguem bonito!')
					rate = body.slice(8)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é lindo: *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { quoted: mek })
					break
case '%gostoso':		
	            	if (args.length < 1) return reply('marque sua mãe aquela gostosa!')
					rate = body.slice(9)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
					break
case '%gado':		
	            	if (args.length < 1) return reply('marque um gado!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { quoted: mek })
					break
case 'rankcaco':
try{
if(!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
d = []
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgay':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank dos mais lindos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazista':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostoso':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank dos mais gostosos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgado':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'cassino':
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break
case 'cassino2':
if (!isPremium) return reply ("Voce precisa ser vip")
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
case 'pombinhos':
case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'gostosas':
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break 
				//_GRUPOS
				case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'fotogp':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
				case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
							aud = fs.readFileSync('./asse/banido.mp3');
            client.sendMessage(from, aud, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
						aud = fs.readFileSync('./assets/banido2.mp3');
            client.sendMessage(from, aud, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					}
					break
				case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
client.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply("erro ao executar comando")
}
break
case 'play':
                reply(mess.wait)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(5)}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek}) 
                break
/*case 'play':
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=apivinz&q=${body.slice(6)}`)
info =  `*MUSICA ENCONTRADA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.source}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.link)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break*/

/*case 'play':
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${body.slice(6)}`)
info =  `*MUSICA ENCONTRADA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.source}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumbnail)
buffer2 = await getBuffer(msc.result.url_video)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break*/

case 'msc1':
reply(mess.wait)
//play = body.slice(6)
msc = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${body.slice(6)}`)
info =  `*MUSICA ENCONTRADA!!!*\nTítulo : ${msc.result.title}\nFonte : ${msc.url}\n\nBaixando sua musica`
buffer1 = await getBuffer(msc.result.thumb)
buffer2 = await getBuffer(msc.result.url)
client.sendMessage(from, buffer1, image, {quoted: mek, caption: info})
client.sendMessage(from, buffer2, messageType.audio, {mimetype: 'audio/mp4', filename: `${msc.result.title}.mp3`, quoted: mek})
break

/*case 'play':
reply (mess.wait)
teks = body.slice(6)
musica = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/play2?query=${teks}`)
//buffer = await getBuffer(musica.result.thumbnail)
buffer2 = await getBuffer(musica.result.url_audio)
//buffer3 = 'Musica encontrada enviando'
teks2 =`𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢 𝙼𝚞𝚜𝚒𝚌
𝚄𝚜𝚞𝚊́𝚛𝚒𝚘 @${sender.split("@")[0]}
𝚝𝚒𝚝𝚞𝚕𝚘 ${musica.result.title}`
//client.sendMessage(from, buffer, image, {quoted: mek, caption: teks2 })
client.sendMessage(from, buffer2, audio, {mimetype:'audio/mp4',filename: '${musica.result.title}.mp3' , quoted: mek})
break*/
case 'covid19':
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `𝐋𝐎𝐂𝐀𝐋: ${post.result.local}\n𝐃𝐀𝐃𝐎𝐒: ${post.result.dadosAtualizados}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐀𝐒𝐎𝐒: ${post.result.totalCasos}\n𝐍𝐎𝐕𝐎𝐒 𝐂𝐀𝐒𝐎𝐒: ${post.result.novosCasos}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.totalMortes}\n𝐍𝐎𝐕𝐀𝐒 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.novasMortes}\n𝐑𝐄𝐂𝐔𝐏𝐄𝐑𝐀𝐃𝐎𝐒: ${post.result.recuperados}\n 
𝐕𝐀𝐂𝐈𝐍𝐀𝐃𝐎𝐒-1: ${post.result.vacinadosPrimeiraDose}\n𝐕𝐀𝐂??𝐍𝐀𝐃𝐎𝐒-2: ${post.result.vacinadosSegundaDose}\n𝐁𝐎𝐋𝐄𝐓𝐈𝐍𝐒: ${post.result.boletinsContabilizados}`
client.sendMessage(from, send, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐩𝐨𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩\nEstatisticas Covid-19 Br", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
break
				case 'abraço':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break
				case 'linkgp':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'sair':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
				case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
case 'plaquinha':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
case 'qrcode':
        			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
				//_FIGURINHAS
				case 'attp' :
				case 'sttp' :
					if (args.length < 1) return reply(`ERROR: kd o texto?? \nUso: ${prefix}attp (seu texto aqui)`)
					try {
						var chollotxt = body.slice(5).trim()
						reply(mess.wait)
						url = encodeURI(`https://api.xteam.xyz/attp?file&text=${chollotxt}`)
						textofigu = await getBuffer(url)
						client.sendMessage(from, textofigu, sticker, { quoted: mek })
					}
					
					
					catch (e) {
						reply("Error: Use apenas caracteres alfanuméricos")
					}
					break
case 'togif': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
case 'ttp':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(body.slice(4))}`)
client.sendMessage(from, attp2, sticker, {quoted: mek})
break
				case 'stiker':
				case 'sticker':
			    case 'f':
			    case 'figu':
			     case 'fig':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Skiller', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter $ {type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Skiller', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde. ')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Skiller', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie uma imagem com a legenda ${prefix}sticker ou imagem marcada já enviada`)
					}
					break
				//_UTILIZAVEIS
case'img':
case 'image':
case 'imagem':
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
client.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break
case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nAgora *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					reply(open)
					break
case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nAgora *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'swm':
	    case 'stickerwm':
const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "Feito", jpegThumbnail: fs.readFileSync('me.jpg')} } }
const { convertSticker } = require('./plugins/swm.js')
			        if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
                    } else {
                    reply('Formato incorreto marque uma imagem!')
                    }
                    break
case 'contar':
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break
				case 'gay':
				rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `${rate} Você é ${random}% gay\n\n${bo}`
reply(hasil)
break
case '%':
				algo = body.slice(2)
				pessoa = body.slice(1)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
porcentagem = random
if (porcentagem < 20 ) {frase = 'Você não é😔'} else if (porcentagem == 21 ) {frase = '+/- ${algo}'} else if (porcentagem == 23 ) {frase = '+/- ${algo}'} else if (porcentagem == 24 ) {frase = '+/- ${algo}'} else if (porcentagem == 25 ) {frase = '+/- ${algo}'} else if (porcentagem == 26 ) {frase = '+/- ${algo}'} else if (porcentagem == 27 ) {frase = '+/- ${algo}'} else if (porcentagem == 28 ) {frase = '+/- ${algo}'} else if (porcentagem == 29 ) {frase = '+/- ${algo}'} else if (porcentagem == 30 ) {frase = '+/- ${algo}'} else if (porcentagem == 31 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 32 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 33 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 34 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 35 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 36 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 37 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 38 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 39 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 40 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 41 ) {frase = 'É sim em...'} else if (porcentagem == 42 ) {frase = 'É sim em...'} else if (porcentagem == 43 ) {frase = 'É sim em...'} else if (porcentagem == 44 ) {frase = 'É sim em...'} else if (porcentagem == 45 ) {frase = 'É sim em...'} else if (porcentagem == 46 ) {frase = 'É sim em...'} else if (porcentagem == 47 ) {frase = 'É sim em...'} else if (porcentagem == 48 ) {frase = 'É sim em...'} else if (porcentagem == 49 ) {frase = 'É sim em...'} else if (porcentagem == 50 ) {frase = '50% agora pra saber só ele dizendo🧐'} else if (porcentagem > 51) {frase = 'você é concerteza🙈'
}
result = `${pessoa} Você é ${random}% ${algo}\n\n${frase}`
reply(result)
break
				case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break
				case 'img':
case 'image':
case 'imagem':
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
client.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break
				case 'ler':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
//_COMANDOS DE AUDIO

				//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

				//FIM DOS COMANDOS DE ÁUDIO
				//_COMANDOS DE VOZ
case 'oi':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'canta ai bot':
tujuh = fs.readFileSync('./assets/canto.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Bloqueados* : ${blocked.length}\n*O bot está ativo em * : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados: \ n '
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('marque uma foto mano ')
					}
					break
				
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'qual codigo de linguagem?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde está o texto?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('O texto é muito grande')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				   case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Voce foi rebaixado @${mentioned[0].split('@')[0]} Agora você é só mais um membro comum!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quem vc quer que eu adicione?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar alvo, talvez porque esteja privado')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, emitido :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recebido, emitido : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter o adesivo em imagem ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Prontinho'})
						fs.unlinkSync(ran)
					})
					break
				
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativado ')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sucesso ao desativar o modo simi neste grupo de grupo ✔️')
					} else {
						reply('1 para habilitar, 0 para desabilitar ')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('já ativo buceta peluda')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativado com sucesso o recurso Boas vindas do grupo✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativar com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else {
						reply('welcome 1 para habilitar, welcome 0 para desabilitar')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque o alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('falhou')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('marque uma foto de anime')
					}
					break
				default:
				
if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname2}* vc é admin por isso não vou te banir`)
		    supra.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname2}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    supra.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
                    if ((budy === `Bom dia`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Bom dia lindão ou lindona', text, {quoted: mek})
                    }
if ((budy === `Boa noite`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Boa noite lindão ou lindona', text, {quoted: mek})
                    }
if ((budy === `sagate bot`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Lava essa boca pra falar do meu criador vadia', text, {quoted: mek})
}
if ((budy === `sagate`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'esse gostoso q me criou 😘', text, {quoted: mek})
if ((budy === `sagate gay!`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Lava essa boca pra falar do meu criador vadia', text, {quoted: mek})
}
if ((budy === `bot gay!`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Lava essa boca pra falar do meu criador vadia', text, {quoted: mek})
}
if ((budy === `boa noite`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Boa noite lindão ou lindona', text, {quoted: mek})
}
if ((budy === `vai tmnc`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Disse a putinha..', text, {quoted: mek})
                    }
if ((budy === `sagate gay`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Lava essa boca pra falar do meu criador vadia', text, {quoted: mek})
                    }
if ((budy === `Bot ta on?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }
                    }
if ((budy === `bot ta on?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }                    
                    }
if ((budy === `bot ta on`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }                    
if ((budy === `Bot on?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }
if ((budy === `bot on?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }                 
if ((budy === `Bot on`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }                       
if ((budy === `bot on?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'sera que eu tou?', text, {quoted: mek})
                    }                    
if ((budy === `Oi bot`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'oi coisa linda', text, {quoted: mek})
                    }
if ((budy === `Oi`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'oi coisa linda', text, {quoted: mek})
                    }
if ((budy === `Kkkkkkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `ksksksks`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `kkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `Kkkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `Kkkkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp Ta com Patati Patatá enfiado no teu cu', text, {quoted: mek})
                    }           
if ((budy === `ksksksks`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `Ksksksk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `kkkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }                      
if ((budy === `kkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }     
if ((budy === `kkkk`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta tão engraçado hoje né fdp? Ta com Patati Patatá enfiado no teu cu?', text, {quoted: mek})
                    }
if ((budy === `kant sola?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ainda duvida seu merdinha?', text, {quoted: mek})
                    }
if ((budy === `kant sola?`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ainda duvida seu merdinha?', text, {quoted: mek})
                    }  
if ((budy === `sagate sola`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ainda duvida seu merdinha?', text, {quoted: mek})
                    }        
if ((budy === `sagate feio`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'ue pq ele e casado e você nao?', text, {quoted: mek})
                    }
if ((budy === `bot corno`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Teu Pai', text, {quoted: mek})
                    }                
if ((budy === `Bot corno`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Teu Pai', text, {quoted: mek})
                    }
if ((budy === `cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
} 
if ((budy === `Cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
}                        
if ((budy === `Compra cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
} 
if ((budy === `compra cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
}  
if ((budy === `foi compra cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
}                     
if ((budy === `Foi compra cigarro`)){                     
                   // const F3 = fs.readFileSync('kk/sticker/botlogo.webp')
              //      client.sendMessage(from, F3, sticker, {quoted: "teste"})
client.sendMessage(from, 'Ta, mais como essa conversa chegou até o assunto do seu pai?', text, {quoted: mek})
}                                                                                                                                                                                                                     
            if ((budy === "prefix")){
				    reply(`O meu prefix e ${prefix}`)
				    }
            if ((budy === "Prefix")){
				    reply(`O meu prefix e ${prefix}`)
				    }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
