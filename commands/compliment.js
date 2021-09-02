const compliments = [
        'if someone based an Internet meme on you, it would have impeccable grammar:sunglasses: .',
        'who raised you? They deserve a :medal: for a job well done.',
        'if you were a scented :candle: they\'d call it Perfectly Imperfect (and it would smell like summer).',
        'everyone gets knocked down sometimes, but you always get back up and keep going.',
        'you\'re cute ngl :flushed:',
        'you\'re gorgeous—and that\'s the least interesting thing about you, too :sparkling_heart:',
        'you\'re all that and a super-size bag of chips :frieds:.',
        'even though I\'m a bot, I\'d still love to be friends with you :point_right::point_left:',
        'there’s a beautiful softness behind your eyes. :pleading_face:',
        'I always learn so many interesting and thought-provoking things from you :face_with_monocle:.',
        'how are you so damn intimidating? :weary:',
        'your eyes are so damn breathtaking :heart_eyes:',
        'I\’ve missed you man. :right_facing_fist::left_facing_fist:',
        'I like you. :blush:',
        'wow, now I have a huge crush on you.:blush:',
        'what a cutie you are.:sparkles:',
        'did you know you are beautiful?:purple_heart:',
        'you look good.:thumbsup:',
        'I could talk to you all night :night_with_stars:.',
        'you are awesome :blush:.',
        'you’re my hero :superhero: .',
        'what a legend... :clap::clap::clap:',
        
    ]
    module.exports = {
        name: 'compliment',
        description: "This is the compliment command",
        execute(message, args){
            const index = Math.floor(Math.random() * compliments.length);
            let user = message.mentions.users.first() || message.author


            message.channel.send(`${user}` + `,` + ` `+ compliments[index]);
           
        
        }
    } 