const Discord = require('discord.js'); 
require('dotenv').config();
const fetch = require('node-fetch');

const client = new Discord.Client();

const prefix = '<3 ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
} 

client.once('ready', () => {
    console.log('jessie <3 is online!')
     client.user.setActivity('<3 help', {type: "WATCHING"}).catch(console.error)

});
const foodsrep = [
    'hamburger:',
    ':hotdog:',
    ':sushi:',
    ':bacon:',
    ':fried_shrimp:',
    ':fries:',
    ':curry:',
    ':pizza:',
    ':cake:',
    ':pancakes:',
    ':candy:',
    ':lollipop:',
    ':custard:',
    ':burrito:',
    ':taco:',
    ':icecream:',
    ':popcorn:',
    ':poultry_leg:',
    ':meat_on_bone:',
    ':cooking:',
    ':spaghetti:',
    ':ice_cream:',
    
]
const quotes = [
    'I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.',
    'Don’t worry about the world coming to an end today. It is already tomorrow in Australia.',
    'A day without laughter is a day wasted.',
    'Remember, today is the tomorrow you worried about yesterday.',
    'Education is learning what you didn’t even know you didn’t know.',
    'Everyone with telekinetic powers, raise my hand.',
    'A bank is a place that will lend you money if you can prove that you don’t need it.',
    'My mother always used to say: The older you get, the better you get, unless you’re a banana.',
    'Behind every great man is a woman rolling her eyes',
    'Never do anything out of hunger. Not even eating.',
    'What do you mean, he don’t eat no meat? That’s okay, that’s okay. I make lamb.',
    'To call you stupid would be an insult to stupid people!',
    'Accept who you are. Unless you’re a serial killer',
    'There is one word that describes people that don’t like me: Irrelevant.',
    'I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.',
    'My husband and I fell in love at first sight. Maybe I should have taken a second look.',
    'Anyone who lives within their means suffers from a lack of imagination.',
    'Money cannot buy health, but I’d settle for a diamond-studded wheelchair.',
    'Why yes, I can carry on a conversation made up entirely of movie quotes',
    'I like long walks, especially when they are taken by people who annoy me.',
    'I’m sure wherever my Dad is, he’s looking down on us. He’s not dead, just very condescending',
    'Trying is the first step toward failure.',
    
]
const compliments = [
    'if someone based an Internet meme on you, it would have impeccable grammar:sunglasses: .',
    'who raised you? They deserve a :medal: for a job well done.',
    'if you were a scented :candle: they\'d call it Perfectly Imperfect (and it would smell like summer).',
    'everyone gets knocked down sometimes, but you always get back up and keep going.',
    'you\'re cute ngl :flushed:',
    'you\'re gorgeous—and that\'s the least interesting thing about you, too :sparkling_heart:',
    'you\'re all that and a super-size bag of chips :frieds:.',
    'even though I\'m a bot, I\'d still love to be friends with you :point_right::point_left:',
    'there’s a beautiful softness behind your eyes. :pleading_face:',
    'I always learn so many interesting and thought-provoking things from you :face_with_monocle:.',
    'how are you so damn intimidating? :weary:',
    'your eyes are so damn breathtaking :heart_eyes:',
    'I\’ve missed you man. :right_facing_fist::left_facing_fist:',
    'I like you. :blush:',
    'wow, now I have a huge crush on you.:blush:',
    'what a cutie you are.:sparkles:',
    'did you know you are beautiful?:purple_heart:',
    'you look good.:thumbsup:',
    'I could talk to you all night :night_with_stars:.',
    'you are awesome :blush:.',
    'you’re my hero :superhero: .',
    'what a legend... :clap::clap::clap:',
    
]
const rickrolls = [
    'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825',
    'https://tenor.com/view/summerella-gif-5404834',
    'https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983',
    'https://tenor.com/view/sike-you-thought-gif-13160947',
    'https://tenor.com/view/rickroll-dance-funny-you-music-gif-7755460',
    'https://tenor.com/view/robert-downey-jr-tony-stark-iron-man-avengers-the-avengers-gif-14531792',
    'https://tenor.com/view/what-bruh-steve-harvey-shocked-surprised-gif-17654826',
    'https://tenor.com/view/rick-ashtley-never-gonna-give-up-rick-roll-gif-4819894',
    'https://tenor.com/view/never-gif-4402505',
    'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825',
    'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825',
    'https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825',
    'https://tenor.com/view/why-why-why-why-me-why-god-oh-god-gif-18507096',
    'https://tenor.com/view/why-why-why-why-me-why-god-oh-god-gif-18507096',
    'https://tenor.com/view/really-what-seriously-wow-dissapoint-gif-5759942',
    'https://tenor.com/view/bruh-really-tell-me-more-no-way-wth-gif-21239271',
    
    
]
client.on('message', gotMessage);

async function gotMessage(message) {
        let tokens = message.content.split(' ');
    if (message.content === '<3') {
        message.reply('Hey I think you dropped this :crown:')
    

    } else if (message.content === '<3hungry') {
        const index = Math.floor(Math.random() * foodsrep.length);
        message.reply('Here have a ' + foodsrep[index] + ". Bon appetite!");
    } else if (message.content === '<3quote') {
        const index = Math.floor(Math.random() * quotes.length);
        message.channel.send(quotes[index]);
    } else if (message.content === '<3compliment') {
        const index = Math.floor(Math.random() * compliments.length);
        message.reply(compliments[index]);
    } else if (message.content === '<3rickroll') {
        const index = Math.floor(Math.random() * rickrolls.length);
        message.channel.send(rickrolls[index]);
    }   else if (tokens[0] == '<3gif') {   

        let keywords = 'rickroll';
        if(tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    message.channel.send(json.results[index].url);

       
    }

}
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('command').execute(message, args, Discord);
    }else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    }else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'ih8u'){
        client.commands.get('love').execute(message, args);
    } else if (command === '69'){
        client.commands.get('noice').execute(message, args);
    } else if (command === 'smh'){
        client.commands.get('smh').execute(message, args);
    } else if (command === 'lol'){
        client.commands.get('lol').execute(message, args);
    } else if (command === 'mwah'){
        client.commands.get('kiss').execute(message, args);
    } else if (command === 'fax'){
        client.commands.get('ziix').execute(message, args);
    } 
    
    


});

client.login(process.env.DISCORD_TOKEN);

