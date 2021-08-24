
module.exports = {
    name: 'ping',
    description: "this is a ping command!", 
    async run(client, message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Calculating ping...")
        .setColor('#3E0E52')
        message.channel.send(embed).then((resultMessage)  => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp;  

            let resultEmbed = new Discord.MessageEmbed()
            .setColor('#3E0E52')
            .addField(`:robot:  ${ping}ms`, ' || ||')
            .addField(`:stopwatch: ${client.ws.ping}ms`,' || ||')
            

            resultMessage.edit(resultEmbed);
             })    
        }
    }
