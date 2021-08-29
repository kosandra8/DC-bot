const fetch = require('node-fetch');

module.exports = {
        name: 'purge',
        description: "This is the purge command",
        execute(message, args) {
            if(!args[0]) return message
            .reply('Please provide a **valid** number/amount of messages you want to purge.');
            if(isNaN(args[0])) return message
            .reply('Please provide a **real number!**.')

            if(args[0] > 100) return message
            .reply('You can\'t delete more than 100 messages!')
            if(args[0] < 1) return message
            .reply('You must delete at least 1 message!')

            
        }
    }