const insults = [
    'you\'re so ugly, you scared the crap out of the toilet :toilet:',
    'I thought of you today. It reminded me to take out the trash :put_litter_in_its_place:',
    'it\'s better to let someone think you are an Idiot than to open your mouth and prove it :lips:',
    'if I had a face like yours, I\'d sue my parents :baby:',
    'I can lose weight, but you\'ll always be ugly. :clown:',
    'Why don\'t you slip into something more comfortable... like a coma :sleeping_accommodation:',
    'you\'re all that and a super-size bag of chips :fries:',
    ' You are more disappointing than an unsalted pretzel :pretzel:',
    'you\'re so annoying you probably make Happy Meal cry :pleading_face:',
    'Your skin is glowing, but I think it’s from the radiation emanating from your toxic ass personality :star2:',
    'The 0.01% of germs are afraid of contracting stupidity from you. :microbe:',
    'Your only purpose in life is as an organ donor :anatomical_heart:',
    'That sounds like a \'you\' problem :skull:',
    'I was going to give you a nasty look, but I see you already have one :face_vomiting:',
    'I\'m not a proctologist, but I know an asshole when I see one :blush:',
    'i love the sound you make when you shut up :sparkles:',
    'You have an entire life to be an idiot. Why not take today off?? :purple_heart:',
    'I\'d agree with you but then we\'d both be wrong.:thumbsup:',
    'Cry me a river and drown yourself in it :night_with_stars:',
    ' Have a nice day... somewhere else :blush:.',
    'The people who tolerate you on a daily basis are the real heroes. Myself, for example. :superhero: .',
    'If you ran like your mouth you\'d be in good shape. :clap::clap::clap:',
    
]
module.exports = {
    name: 'insult',
    description: "This is the insult command",
    execute(message, args){
        const index = Math.floor(Math.random() * insults.length);
        let user = message.mentions.users.first() || message.author


        message.channel.send(`${user}` + `,` + ` `+ insults[index]);
       
    
    }
} 