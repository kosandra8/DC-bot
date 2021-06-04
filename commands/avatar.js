module.exports = {
    name: 'avatar',
    aliases: ['AVATAR', 'av', 'profile', 'pfp'],
    description: "Show your or other's Discord Avatar",
    execute(message, args, Discord) { 
            let user = message.mentions.users.first() || message.author
            let avur = user.displayAvatarURL({ dynamic: true, size: 256, })
            let Av = new Discord.MessageEmbed()
        .setColor('000000')
        .setDescription('**Avatar**')
        .setTitle(`${user.tag}`)
        .setImage(avur)
        
        message.channel.send(Av);
            }
        } 