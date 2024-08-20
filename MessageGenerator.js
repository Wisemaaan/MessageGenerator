const quotesList = [
    '“Appear weak when you are strong, and strong when you are weak.”',
    '“The supreme art of war is to subdue the enemy without fighting.”',
    '“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”',
    '“Supreme excellence consists of breaking the enemys resistance without fighting.”',
    '“Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win”',
    '“The greatest victory is that which requires no battle.”',
    '“To know your Enemy, you must become your Enemy.”',
    '“Even the finest sword plunged into salt water will eventually rust.”'
];


const messageGenerator = (arr) => {
    randomIndex =  Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}


let randomBase = {
    firstList: {
        spiritAnimalList: ['Beaver', 'Duck', 'Otter', 'Sloth'],
    },
    secondList: {
        knockKnockList: ['Someone without a sense of humor.', 'Someone without a computer science degree.', 'Someone who is unable to create a good knock-knock joke.'],
    },
    thirdList: {
        advicesList: ['Drink more water.', 'Eat more broccoli.', 'Count to ten and order the biggest pizza.', 'Always look at the bright side of life.']
    },
    fourthList: {
        aesciiList_1: [
            "  .%%%%%%..%%..%%..%%%%%%...%%%%...........%%%%%%...%%%%............%%%%...%%...%%..%%%%%%...%%%%....%%%%...%%...%%..%%%%%%.",
            "  ...%%....%%..%%....%%....%%................%%....%%..............%%..%%..%%...%%..%%......%%......%%..%%..%%%.%%%..%%.....",
            "  ...%%....%%%%%%....%%.....%%%%.............%%.....%%%%...........%%%%%%..%%.%.%%..%%%%.....%%%%...%%..%%..%%.%.%%..%%%%...",
            "  ...%%....%%..%%....%%........%%............%%........%%..........%%..%%..%%%%%%%..%%..........%%..%%..%%..%%...%%..%%.....",
            "  ...%%....%%..%%..%%%%%%...%%%%...........%%%%%%...%%%%...........%%..%%...%%.%%...%%%%%%...%%%%....%%%%...%%...%%..%%%%%%.",
            "  .........................................................................................................................."
        ],
    },
    getRandomElement: function (array) {
        return array[Math.floor(Math.random() * array.length)]
    }

};

for (let i = 0; i < randomBase.fourthList.aesciiList_1.length; i++) {
    console.log(randomBase.fourthList.aesciiList_1[i]); 
}

console.log('Quote of the day: ' + messageGenerator(quotesList));
console.log('Your spirit animal is: ' + randomBase.getRandomElement(randomBase.firstList.spiritAnimalList));
console.log('Knockm Knock, \nWho is there: ' + '\n' + randomBase.getRandomElement(randomBase.secondList.knockKnockList));
console.log('You should: ' + randomBase.getRandomElement(randomBase.thirdList.advicesList));