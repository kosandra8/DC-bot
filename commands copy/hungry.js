const foodsrep = [
    'hamburger:',
    ':hotdog:',
    ':sushi:',
    ':bacon:',
    ':fried_shrimp:',
    ':fries:',
    ':curry:',
    ':pizza:',
    ':cake:',
    ':pancakes:',
    ':candy:',
    ':lollipop:',
    ':custard:',
    ':burrito:',
    ':taco:',
    ':icecream:',
    ':popcorn:',
    ':poultry_leg:',
    ':meat_on_bone:',
    ':cooking:',
    ':spaghetti:',
    ':ice_cream:',
]
module.exports = {
    name: 'hungry',
    description: "This is the hungry command",
    execute(message, args){
        const index = Math.floor(Math.random() * foodsrep.length);
        message.reply('Here have a ' + foodsrep[index] + ". Bon appetite!");
    
    }
} 