const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "dev", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Rahmani", numero: "255693629079" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "WELCOME TO RAHMANI MD HELP CENTER! ASK FOR HELP FROM ANY OF THE DEVELOPERS BELOW:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre
` 
THANK YOU FOR CHOOSING RAHMANI MD,
HERE ARE OUR SUPPORTIVE LINKS
╔══════════════════╗
𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊 𝐇𝐄𝐑𝐄
https://chat.whatsapp.com/D3dnvm4vsn9HafO6wkqnzF
╚══════════════════╝
╔══════════════════╗
𝐆𝐈𝐓𝐇𝐔𝐁 𝐑𝐄𝐏𝐎 𝐒𝐓𝐎𝐑𝐘 𝐋𝐈𝐍𝐊
https://github.com/Qartde/Rahmani_Md
╚══════════════════╝
╔══════════════════╗
𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐒𝐈𝐓𝐄 𝐋𝐈𝐍𝐊
https://rahmani-md-7xqe.onrender.com/pair
╚══════════════════╝
╔══════════════════╗
POWERED BY 𝐑𝐀𝐇𝐌𝐀𝐍𝐈 𝐌𝐃
╚═══════════════════`
{quoted:ms});
