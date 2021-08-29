const fetch = require('node-fetch');

module.exports = {
        name: 'laugh',
        description: "This is the laugh gif command",
        async execute(message, args, Discord) {
        
        
        let keywords = 'laughing anime';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#800020')
        .setDescription(`** ${message.author.username} laughs 😂 **`,)    
        .setImage(json.results[index].media[0].gif.url)
        

    
        

        message.channel.send(embed)
        }
    }