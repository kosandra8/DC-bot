const fetch = require('node-fetch');

module.exports = {
        name: 'rickroll',
        description: "This is the rickroll command",
        async execute(message, args) {
        let keywords = 'rickroll';
        
        
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);

        message.channel.send(json.results[index].url);
        }
    }
