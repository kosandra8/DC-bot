const quotes = [
    'I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.',
    'Don’t worry about the world coming to an end today. It is already tomorrow in Australia.',
    'A day without laughter is a day wasted.',
    'Remember, today is the tomorrow you worried about yesterday.',
    'Education is learning what you didn’t even know you didn’t know.',
    'Everyone with telekinetic powers, raise my hand.',
    'A bank is a place that will lend you money if you can prove that you don’t need it.',
    'My mother always used to say: The older you get, the better you get, unless you’re a banana.',
    'Behind every great man is a woman rolling her eyes',
    'Never do anything out of hunger. Not even eating.',
    'What do you mean, he don’t eat no meat? That’s okay, that’s okay. I make lamb.',
    'To call you stupid would be an insult to stupid people!',
    'Accept who you are. Unless you’re a serial killer',
    'There is one word that describes people that don’t like me: Irrelevant.',
    'I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.',
    'My husband and I fell in love at first sight. Maybe I should have taken a second look.',
    'Anyone who lives within their means suffers from a lack of imagination.',
    'Money cannot buy health, but I’d settle for a diamond-studded wheelchair.',
    'Why yes, I can carry on a conversation made up entirely of movie quotes',
    'I like long walks, especially when they are taken by people who annoy me.',
    'I’m sure wherever my Dad is, he’s looking down on us. He’s not dead, just very condescending',
    'Trying is the first step toward failure.',
    
]
module.exports = {
    name: 'quote',
    description: "This is the quote command",
    execute(message, args){
        const index = Math.floor(Math.random() * quotes.length);
        message.channel.send(quotes[index]);
    
    }
} 