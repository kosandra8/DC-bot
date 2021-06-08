const fetch = require('node-fetch');

module.exports = {
        name: 'kissgif',
        description: "This is the kiss gif command",
        async execute(message, args, Discord) {
            if (!message.mentions.users.first())
            return message.reply('**:warning: | Wrong Arguments! Please tag someone!.**');
        
        let keywords = 'anime kiss';
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        
              
                
        const embed = new Discord.MessageEmbed()
        .setColor('#B00B69')
        .setDescription(`**${message.author.username} kisses ${message.mentions.users.first().username}'s lips~ Adorable!**`,)    
        .setImage(json.results[index].media[0].gif.url)
        .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))

    
        

        message.channel.send(embed)
        }
    }