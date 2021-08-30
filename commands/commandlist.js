module.exports = {
    name: 'commandlist',
    description: "Help Embed",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#16161d')
        .setTitle('Oracle Command List')
        .setDescription('Here are some really cool authentic commands, use `O{command}`')           
        .addFields(
            {name: ':bookmark_tabs: Text Commands', value :'`<3` `ping` `mwah` `lol` `69` '},
            {name: ':island: Images Commands', value :'`avatar` `gif + (anything)` `rickroll`'},
            {name: ':joy: Fun Commands', value :'`blush` `bully` `clap` `compliment` `cry` `dance` `hug` `hungry` `kick` `kill` `kiss` `laugh` `quote` `sing` `slap` `smirk` `wink`'},
            {name: ':notepad_spiral: Math Commands', value :'`calculate "+" "-" "*" "/" "pi"`'},
            
            ) 
        
        .setTimestamp()
        .setFooter('Use them wisely and don\'t abuse!')
        
        message.channel.send(newEmbed); 
    }

    
}