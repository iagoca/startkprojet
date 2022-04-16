  const { getBuffer } = require('../function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `hsudahlah`, 
              buttonText: { 
               displayText: `Salve galera cabei de entrar😀 ja ja vou ler as regras do grupo 🤧` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `Opa @${num.split("@")[0]} Bem vindo a:\n\n ${metadata.subject}\n\n\nVe se lê as regras prr🤬\n\n\n🙃se divirta🙃`, 
         location: { 
          jpegThumbnail: await getBuffer(ppuser) 
         }, 
         buttons: button, 
         footer: 'NT DRAGON-MD', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Vai pela sombra por que pelo sol a 💩 seca🤧` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `@${num.split("@")[0]} saio do grupo:\n\n ${metadata.subject}*\n\n\nBoi boi da cara preta pega esse mlk que chupa a pika do capeta ...`, 
           location: { jpegThumbnail: await getBuffer(ppuser) 
          }, 
           buttons: button, 
           footer: 'NT DRAGON-MD', 
           mentions: [num] 
             }
             )
             }
            }
        } catch {
      }
    }   
  }
module.exports = { groupResponse }  
