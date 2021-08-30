module.exports = {
    name: 'avatar',
    aliases: ['AVATAR', 'av', 'profile', 'pfp'],
    description: "Show your or other's Discord Avatar",
    execute(message, args, Discord) { 
            let user = message.mentions.users.first() || message.author
            let avur = user.displayAvatarURL({ dynamic: true, size: 256, })

            if(!user)
            return message.reply('**I couldn\'t find that user!')
            .then(msg => {
                msg.delete({ timeout: 1000});
            })
            .catch();



            let Av = new Discord.MessageEmbed()
        .setColor('000000')
        .setDescription('**Avatar**')
        .setTitle(`${user.tag}`)
        .setImage(avur)
        .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))

        
        message.channel.send(Av);
            }
        } 