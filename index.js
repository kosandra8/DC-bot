const Discord = require('discord.js'); 
require('dotenv').config();

const client = new Discord.Client();
const prefix = 'O';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
} 

client.once('ready', () => {
    console.log('Oracle is online!')
     client.user.setActivity('Ohelp', {type: "PLAYING"}).catch(console.error)

});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'help'){
    client.commands.get('commandlist').execute(message, args, Discord);
    }

//Text Commands     
    else if (message.content === '<3') {
    message.reply('Hey I think you dropped this :crown:')
    } else if (command === 'ping') {    
    client.commands.get('ping').run(client, message, args, Discord);
    } else if (command === 'mwah'){
    client.commands.get('kiss').execute(message, args);
    } else if (command === 'lol'){
    client.commands.get('lol').execute(message, args);    
    } else if (command === '69'){
    client.commands.get('noice').execute(message, args);
    } else if (command === 'purge'){
    client.commands.get('purge').execute(message, args, Discord);

//Image Commands
    } else if (command === 'gif'){
    client.commands.get('gifs').execute(message, args);
    } else if (command === 'avatar') {
    client.commands.get('avatar').execute(message, args, Discord);
    }  else if (command === 'rickroll'){
    client.commands.get('rickroll').execute(message, args);
    
//Fun Commands
    } else if (command === 'blush'){
        client.commands.get('blush').execute(message, args, Discord);
    } else if (command === 'bully'){
        client.commands.get('bully').execute(message, args, Discord);
    } else if (command === 'clap'){
        client.commands.get('clap').execute(message, args, Discord);
    } else if (command === 'compliment'){
        client.commands.get('compliment').execute(message, args);
    } else if (command === 'cry'){
        client.commands.get('cry').execute(message, args, Discord);
    } else if (command === 'dance'){
        client.commands.get('dance').execute(message, args, Discord);
    } else if (command === 'hug'){
        client.commands.get('hug').execute(message, args, Discord);
    } else if (command === 'hungry'){
        client.commands.get('hungry').execute(message, args);
    } else if (command === 'insult'){
        client.commands.get('insult').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'kill'){
        client.commands.get('kill').execute(message, args, Discord);
    } else if (command === 'kiss'){
        client.commands.get('kissgif').execute(message, args, Discord);
    } else if (command === 'laugh'){
        client.commands.get('laugh').execute(message, args, Discord);
    } else if (command === 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if (command === 'quote'){
        client.commands.get('quote').execute(message, args);           
    } else if (command === 'sing'){
        client.commands.get('sing').execute(message, args, Discord);
    } else if (command === 'slap'){
        client.commands.get('slap').execute(message, args, Discord);
    } else if (command === 'smirk'){
        client.commands.get('smirk').execute(message, args, Discord);
    }  else if (command === 'wink'){
        client.commands.get('wink').execute(message, args, Discord);
    

//Math Commands
    }  else if (command === 'calculate'){
    client.commands.get('calculate').run(client, message, args); 
    }

    console.log(command);
    
});

client.login(process.env.DISCORD_TOKEN);


