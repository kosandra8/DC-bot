const fetch = require('node-fetch');

module.exports = {
        name: 'wink',
        description: "This is the wink command",
        async execute(message, args, Discord) {
            
            
            
        let keywords = 'winking anime';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#0ff1ce')
        .setDescription(`** ${message.author.username} winks 😉**`,)    
        .setImage(json.results[index].media[0].gif.url)
        

    
        

        message.channel.send(embed)
        }
    }