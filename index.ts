import DiscordJS, { ClientVoiceManager, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready',() =>{
    console.log ('Estou Pronto')
})

client.on('messageCreate', (message) =>{
if(message.content === 'Eai'){
  message.reply('Eai,tudo bem?')
}
if(message.content === 'Oi'){
    message.reply('Oi,tudo bem?')
  }
  if(message.content === 'Tudo bem?'){
    message.reply('Tudo bem,e com voce?')
  }
  if(message.content ==='Qual seu nome?'){
    message.reply('Eu sou Specter,muito prazer.')
  }
  if(message.content === 'O que voce pode fazer?'){
    message.reply('Ainda estou em desenvolvimento, por enquanto eu posso conversar e avisar sobre tarefas.')
  }
  if(message.content === 'Pietro'){
    message.reply('Pietro é o meu criador,ele me ensinou tudo oque eu sei')
  }
  if(message.content === 'Oque voce pode fazer?'){
    message.reply('Ainda estou em desenvolvimento, por enquanto eu posso conversar e avisar sobre tarefas.')
  }
  if(message.content === 'Pietro'){
    message.reply('Pietro é o meu criador,ele me ensinou tudo oque eu sei')
  }
})



client.login(process.env.TOKEN)