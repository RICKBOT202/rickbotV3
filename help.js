
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `Simple WhatsApp Bot
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥

⍚  *ABOUT USER*
╭──────────────────────
│⌬ *Nama* :  ${pushname}
│⌬ *Premium* :  ${premi}
│⌬ *Number* :  wa.me/${sender.split("@")[0]}
│⌬ *Duit* :  Rp${uangku}
│⌬ *XP* :  ${getLevelingXp(sender)}/${reqXp} 
│⌬ *Level* :  ${getLevelingLevel(sender)}
│⌬ *Role* :  ${role}
│⌬ *Database User* :  ${_registered.length}
╰──────────────────────

${a}⍚ HELPER${a}

╭──────────────────────
│⇨ *${prefix}info*
│⇨ *${prefix}owner*
│⇨ *${prefix}report*
│⇨ *${prefix}donasi*
│⇨ *${prefix}request*
╰──────────────────────

${a}⍚ OWNER MENU${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}bc${a}
│ ${a}ᐈ ${prefix}addbadword${a}
│ ${a}ᐈ ${prefix}delbadword${a}
│ ${a}ᐈ ${prefix}bcgc${a}
│ ${a}ᐈ ${prefix}kickall${a}
│ ${a}ᐈ ${prefix}setreply${a}
│ ${a}ᐈ ${prefix}setprefix${a}
│ ${a}ᐈ ${prefix}clearall${a}
│ ${a}ᐈ ${prefix}block${a}
│ ${a}ᐈ ${prefix}unblock${a}
│ ${a}ᐈ ${prefix}leave${a}
│ ${a}ᐈ ${prefix}event [1/0]${a}
│ ${a}ᐈ ${prefix}clone${a}
│ ${a}ᐈ ${prefix}setppbot${a}
╰──────────────────────

${a}⍚ MAKER MENU${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}sticker${a}
│ ${a}ᐈ ${prefix}stickerhide${a}
│ ${a}ᐈ ${prefix}quotemaker${a}
│ ${a}ᐈ ${prefix}glitchtext${a}
│ ${a}ᐈ ${prefix}qrcode${a}
│ ${a}ᐈ ${prefix}nulis${a}
│ ${a}ᐈ ${prefix}nulis2${a}
│ ${a}ᐈ ${prefix}nulis3${a}
│ ${a}ᐈ ${prefix}ttp${a}
│ ${a}ᐈ ${prefix}attp${a}
│ ${a}ᐈ ${prefix}vinta${a}
│ ${a}ᐈ ${prefix}wanted${a}
│ ${a}ᐈ ${prefix}pornlogo${a}
│ ${a}ᐈ ${prefix}phcomment${a}
│ ${a}ᐈ ${prefix}hartatahta${a}
│ ${a}ᐈ ${prefix}gplaybutton${a}
│ ${a}ᐈ ${prefix}darkneon${a}
│ ${a}ᐈ ${prefix}candlemug${a}
│ ${a}ᐈ ${prefix}lovemsg${a}
│ ${a}ᐈ ${prefix}mugflower${a}
│ ${a}ᐈ ${prefix}narutobanner${a}
│ ${a}ᐈ ${prefix}paperonglass${a}
│ ${a}ᐈ ${prefix}romancetext${a}
│ ${a}ᐈ ${prefix}shadowtext${a}
│ ${a}ᐈ ${prefix}coffeecup${a}
│ ${a}ᐈ ${prefix}glowingneon${a}
╰──────────────────────
 
${a}⍚ FUN MENU${a}
 
╭──────────────────────
│ ${a}ᐈ ${prefix}alay${a}
│ ${a}ᐈ ${prefix}jadian${a}
│ ${a}ᐈ ${prefix}pantun${a}
│ ${a}ᐈ ${prefix}tercantik${a}
│ ${a}ᐈ ${prefix}terganteng${a}
│ ${a}ᐈ ${prefix}lirik${a}
│ ${a}ᐈ ${prefix}artinama${a}
│ ${a}ᐈ ${prefix}chord${a}
│ ${a}ᐈ ${prefix}bisakah${a}
│ ${a}ᐈ ${prefix}kapankah${a}
│ ${a}ᐈ ${prefix}apakah${a}
│ ${a}ᐈ ${prefix}rate${a}
│ ${a}ᐈ ${prefix}slap${a}
│ ${a}ᐈ ${prefix}tampar${a}
│ ${a}ᐈ ${prefix}katadilan${a}
│ ${a}ᐈ ${prefix}ceritahoror${a}
│ ${a}ᐈ ${prefix}hurufterbalik${a}
│ ${a}ᐈ ${prefix}moddroid${a} *[VIP]*
│ ${a}ᐈ ${prefix}happymod${a} *[VIP]*
╰──────────────────────
 
${a}⍚ MUTUAL${a}
 
╭──────────────────────
│ ${a}ᐈ ${prefix}mutual${a}
│ ${a}ᐈ ${prefix}next${a}
╰──────────────────────
 
${a}⍚ MEDIA MENU${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}brainly${a} *[VIP]*
│ ${a}ᐈ ${prefix}pinterest${a}
│ ${a}ᐈ ${prefix}resepmasakan${a}
│ ${a}ᐈ ${prefix}igstalk${a}
│ ${a}ᐈ ${prefix}bitly${a}
│ ${a}ᐈ ${prefix}tiktokstalk${a} *[VIP]*
│ ${a}ᐈ ${prefix}ssweb${a}
│ ${a}ᐈ ${prefix}kbbi${a}
│ ${a}ᐈ ${prefix}quran${a}
│ ${a}ᐈ ${prefix}quransurah${a}
│ ${a}ᐈ ${prefix}trendtweet${a}
│ ${a}ᐈ ${prefix}infocuaca${a}
│ ${a}ᐈ ${prefix}resepmasakan${a}
╰──────────────────────
 
${a}⍚ NSFW${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}anjing${a}
│ ${a}ᐈ ${prefix}blowjob${a}
│ ${a}ᐈ ${prefix}nekonime${a}
│ ${a}ᐈ ${prefix}pokemon${a}
│ ${a}ᐈ ${prefix}husbu${a}
│ ${a}ᐈ ${prefix}nangis${a}
│ ${a}ᐈ ${prefix}cium${a}
│ ${a}ᐈ ${prefix}peluk${a}
│ ${a}ᐈ ${prefix}ranime${a}
╰──────────────────────
 
${a}⍚ LIMIT & DUIT${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}limit${a}
│ ${a}ᐈ ${prefix}buylimit${a}
│ ${a}ᐈ ${prefix}transfer${a}
│ ${a}ᐈ ${prefix}dompet${a}
│ ${a}ᐈ ${prefix}giftlimit${a}
│ ${a}ᐈ ${prefix}leaderboard${a}
╰──────────────────────
 
${a}⍚ GROUP MENU${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}delete${a}
│ ${a}ᐈ ${prefix}hidetag${a}
│ ${a}ᐈ ${prefix}blocklist${a}
│ ${a}ᐈ ${prefix}grouplist${a}
│ ${a}ᐈ ${prefix}level${a}
│ ${a}ᐈ ${prefix}linkgc${a}
│ ${a}ᐈ ${prefix}tagall${a}
│ ${a}ᐈ ${prefix}setpp${a}
│ ${a}ᐈ ${prefix}add${a}
│ ${a}ᐈ ${prefix}kick${a}
│ ${a}ᐈ ${prefix}setname${a}
│ ${a}ᐈ ${prefix}setdesc${a}
│ ${a}ᐈ ${prefix}demote${a}
│ ${a}ᐈ ${prefix}promote${a}
│ ${a}ᐈ ${prefix}listadmin${a}
│ ${a}ᐈ ${prefix}group [buka/tutup]${a}
│ ${a}ᐈ ${prefix}leveling [enable/disable]${a}
│ ${a}ᐈ ${prefix}nsfw [1/0]${a}
│ ${a}ᐈ ${prefix}simih [1/0]${a}
│ ${a}ᐈ ${prefix}welcome [1/0]${a}
│ ${a}ᐈ ${prefix}antilink [1/0]${a}
│ ${a}ᐈ ${prefix}nobadword [enable/disable]${a}
╰──────────────────────
 
${a}⍚ GETAUDIO${a}

╭──────────────────────
│ ${a}ᐈ ${prefix}addsticker${a}
│ ${a}ᐈ ${prefix}getsticker${a}
│ ${a}ᐈ ${prefix}stickerlist${a}
│ ${a}ᐈ ${prefix}addvideo${a}
│ ${a}ᐈ ${prefix}getvideo${a}
│ ${a}ᐈ ${prefix}videolist${a}
│ ${a}ᐈ ${prefix}getimage${a}
│ ${a}ᐈ ${prefix}addImage${a}
│ ${a}ᐈ ${prefix}imagelist${a}
│ ${a}ᐈ ${prefix}addaudio${a}
│ ${a}ᐈ ${prefix}getaudio${a}
│ ${a}ᐈ ${prefix}audiolist${a}
╰──────────────────────
 
 ${a}⍚ SONG${a}
 
╭──────────────────────
│ ${a}ᐈ ${prefix}play${a}
│ ${a}ᐈ ${prefix}joox${a} *[VIP]*
╰──────────────────────
 
${a}⍚ thanks team bot${a}

╭──────────────────────
│ ${a}ጸ AFFIS JUNIANTO <dev>${a}
│ ${a}ጸ FADHIL GRAPHY <partner>${a}
│ ${a}ጸ MHANKBARBAR <sc ori>${a}
│ ${a}ጸ MYBOT TEAM <team>${a}
│ ${a}ጸ MLSPACETOON <author/repository> ${a}
╰──────────────────────
`
}
exports.help = help



  
