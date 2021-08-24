const Discord = require('discord.js'); 
require('dotenv').config();

const client = new Discord.Client();
const prefix = '<3';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
} 

client.once('ready', () => {
    console.log('jessie <3 is online!')
     client.user.setActivity('<3help', {type: "WATCHING"}).catch(console.error)

});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'calculate'){
    client.commands.get('calculate').run(client, message, args);
    } else if(command === 'help'){
        client.commands.get('commandlist').execute(message, args, Discord);
    } else if (message.content === '<3') {
            message.reply('Hey I think you dropped this :crown:')
    }else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    } else if (command === 'bully'){
        client.commands.get('bully').execute(message, args, Discord);
    } else if (command === 'compliment'){
        client.commands.get('compliment').execute(message, args);
    } else if (command === 'gif'){
        client.commands.get('gifs').execute(message, args);
    } else if (command === 'hug'){
        client.commands.get('hug').execute(message, args, Discord);
    } else if (command === 'hungry'){
        client.commands.get('hungry').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'kill'){
        client.commands.get('kill').execute(message, args, Discord);
    } else if (command === 'kiss'){
        client.commands.get('kissgif').execute(message, args, Discord);
    } else if (command === 'lol'){
        client.commands.get('lol').execute(message, args);
    } else if (command === 'mwah'){
        client.commands.get('kiss').execute(message, args);
    } else if (command === 'ih8u'){
        client.commands.get('love').execute(message, args);
    } else if (command === '69'){
        client.commands.get('noice').execute(message, args);
    }else if (command === 'ping') {
        client.commands.get('ping').execute(client, message, args);
    } else if (command === 'quote'){
        client.commands.get('quote').execute(message, args);
    } else if (command === 'rickroll'){
        client.commands.get('rickroll').execute(message, args);
    } else if (command === 'slap'){
        client.commands.get('slap').execute(message, args, Discord);
    } else if (command === 'smh'){
        client.commands.get('smh').execute(message, args);
    }
    
});

client.login(process.env.DISCORD_TOKEN);


