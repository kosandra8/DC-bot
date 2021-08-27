const fetch = require('node-fetch');

module.exports = {
        name: 'slap',
        description: "This is the slap gif command",
        async execute(message, args, Discord) {
            if (!message.mentions.users.first())
            return message.reply('**:warning: | Wrong Arguments! Please tag someone!.**')
            .then(msg => {
                msg.delete({ timeout: 800});
            })
            .catch();
        
        let keywords = 'anime slap';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#5d5a56')
        .setDescription(`**${message.author.username} slaps ${message.mentions.users.first().username}!! That looks like it hurt...**`,)    
        .setImage(json.results[index].media[0].gif.url)
        .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))

    
        

        message.channel.send(embed)
        }
    }