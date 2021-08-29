const fetch = require('node-fetch');

module.exports = {
        name: 'dance',
        description: "This is the dance command",
        async execute(message, args, Discord) {
            
            
            
        let keywords = 'dancing anime';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#0ff1ce')
        .setDescription(`** ${message.author.username} dances 💃🕺**`,)    
        .setImage(json.results[index].media[0].gif.url)

    
        

        message.channel.send(embed)
        }
    }