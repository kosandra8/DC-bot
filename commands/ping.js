
module.exports = {
    name: 'ping',
<<<<<<< HEAD
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
=======
    description: "this is a ping command!",
    execute(client, message, args){
        message.reply('Calculating ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp  

            resultMessage.edit(`Bot Latency : ${ping}, API Latency: ${client.ws.ping}`)
        })      

    },
}

         
>>>>>>> cba773d4a9c250dc9604c4ac15e14f39b0bb4f6d
