const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "helps", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

    // Créer une date et une heure en GMT
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg =  `
✦━━━━━━━❖ *𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟* ❖━━━━━━━✦
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
✦━━━━═══❖═══━━━━✦
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  ╭──━━━❖⟿⟿⟿⟿⟿✦
  ┃➳ *Owner* : ${s.OWNER_NAME}
  ┃➳ *Commander* : ${nomAuteurMessage} 
  ┃➳ *Date* : ${date}
  ┃➳ *Prefix* : ${s.PREFIXE}
  ┃➳ *Mode* : ${mode} mode
  ┃➳ *Plugin count* : ${cm.length}
  ┃➳ *ROM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
  ┃➳ *Platform* : ${os.platform()}
  ┃➳ *Theme* : *𝑅𝒜𝒲𝑀𝒜𝒩𝑰*
  ╰──━━━❖⟿⟿⟿⟿⟿✦ ${readmore}
 ░▓▒10%  
 ░▓▒▓▒▓▒▒▒▒▓▓▓20% *𝑅𝒜𝒲𝑀𝒜𝒩𝑰*
 ░▓▒▓▓▓▓▓▒▓▓▓▓▒▓▓30% *𝑀𝒟*
 ░▓▒▓▒▓▓▓▓▓▒▓▒▒▒▒▓▓40%   
 ░▓▒▓▒▓▓▒▒▓▒▒▓▓▓▓50%  
 ░▓▒▒▒▒▓▓▒▒▒▒▒▓▓▓▓60%  
 ░▓▒▒▓▒▒▓▒▓▓▒▒▓▓▓▓70%  
 ░▓▒▓▓▒▓▒▓▒▓▒▓▒▓▒▓▓80%  
 ░▓▒▒▓▓▓▒▓▒▒▓▒▓▒▓▒▓90%  
 ░▓▒▒▓▒▒▓▒▓▒▓▒▒▒▓▓▓100% ${readmore}
 *ALL COMMANDS ADDED✔️!*

 ✦━━━━═══❖═════━━━━✦
 ╭──━━━━⠀⟿⟿⟿⟿⟿✦
 ┃⦿ *𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟 2024* 
 ╰──━━━━⠀⟿⟿⟿⟿⟿✦`;

    let menuMsg = `
✦━━━━═══❖═════━━━━✦
 ░▒▓▒▓▒▓▒▒▒▓▒▓▒▓▓▓▓▒▓▒
 ╭──━━━❖⟿⟿⟿⟿⟿✦
 ┃▓ *𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟 COMMANDS*
 ╰──━━━━⠀⟿⟿⟿⟿⟿✦
 ▒▓▒▓▒▒▒▒▓▓▒▒▒▓▒▓▒▓▒▒ ${readmore}
`;

    for (const cat in coms) {
        menuMsg += `╭─━━══❖ _*${cat}*_ ❖══━━━⟿⟿⟿⟿⟿✦`;
        for (const cmd of coms[cat]) {
            menuMsg += `
┃➻ *${cmd}*`;
        }
        menuMsg += `
╰─━━═══⟿⟿⟿⟿⟿✦
✦━━━━═══•∞•═══━━━━✦
    𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝑅𝒶ℎ𝑚𝒶𝑛𝑖
❖━━━━═══•∞•═══━━━━❖ \n`
    }

    menuMsg += `  ✦━━━⦿•∞•❂━━━⦿❖
    ┃▓ *𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝑅𝒶ℎ𝑚𝒶𝑛𝑖*
    ❖━━━⦿•∞•❂━━━✦

  ■■■■D■■■■■■■■■■■■■
  ■■■■A■■■■■■■■■■■□□
  ■■■■N■■■■■■■■■□□□□
  ■■■■N■■■■■■■□□□□□□
  ■■■■Y■■■■■□□Y□□□□□
  ■■■■■■■■□□□□N□□□□□
  ■■■■■■□□□□□□N□□□□□
  ■■■■□□□□□□□□A□□□□□
  ■■□□□□□□□□□□D□□□□□

    > _®𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟_
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟*, développeur Rahmani" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝑅𝒜𝒲𝑀𝒜𝒩𝑰_𝑀𝒟*, développeur Rahmani" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(infoMsg + menuMsg);
}

});