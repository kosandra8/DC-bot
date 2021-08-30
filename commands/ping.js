
module.exports = {
    name: 'ping',
    description: "this is a ping command!", 
    async run(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Pinging...")
        .setColor('#16161d') 
        message.channel.send('pong! :ping_pong:');
        message.channel.send(embed).then((resultMessage)  => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp;  

            let resultEmbed = new Discord.MessageEmbed()
            .setColor('#16161d')
            .addField(`:robot:  ${ping}ms`, ' ** **')
            .addField(`:stopwatch: ${client.ws.ping}ms`,' ** **')
            
            
            
            resultMessage.edit(resultEmbed);
            
             })    
        }
    }
