const fetch = require('node-fetch');

module.exports = {
        name: 'kill',
        description: "This is the kill gif command",
        async execute(message, args, Discord) {
            if (!message.mentions.users.first())
            return message.reply('**:warning: | Wrong Arguments! Please tag someone!.**')
            .then(msg => {
                msg.delete({ timeout: 1000});
            })
            .catch();
        
        let keywords = 'anime kill';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#800020')
        .setDescription(`**${message.author.username} killed ${message.mentions.users.first().username} someone call the police!**`,)    
        .setImage(json.results[index].media[0].gif.url)
        

    
        

        message.channel.send(embed)
        }
    }