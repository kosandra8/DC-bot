
module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args){
        message.reply('Calculating ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp  

            resultMessage.edit(`Bot Latency : ${ping}, API Latency: ${client.ws.ping}`)
        })      

    },
}

         