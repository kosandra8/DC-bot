module.exports = {
    name: 'commandlist',
    description: "Help Embed",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EE6A50')
        .setTitle('jessie<3 Command List')
        .setDescription('Here are some really cool authentic commands, use `<3 {command}`')           
        .addFields(
            {name: ':bookmark_tabs: Text Commands', value :'`<3` `ping` `mwah` `lol` `69` '},
            {name: ':island: Images Commands', value :'`avatar` `gif + (anything)`'},
            {name: ':joy: Fun Commands', value :'`rickroll` `hungry` `compliment` `quote`'},
            
            ) 
        
        .setTimestamp()
        .setFooter('Use them wisely and don\'t abuse!')
        
        message.channel.send(newEmbed); 
    }

    
}