const fetch = require('node-fetch');

module.exports = {
        name: 'purge',
        description: "This is the purge command",
        async execute(message, args) {
            

            var amount = (args[0])

            if (!amount) return message.channel.send("Please specify the amount of messages you want me to delete")
            if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 100 and 1")


            message.channel.bulkDelete(amount).catch(err => {
                message.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

                let msg = await message.channel.send(`Deleted \`${amount}\` messages!`)
                setTimeout(() => {
                    msg.delete()
                }, 2000)
        }
    }