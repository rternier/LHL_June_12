const startsWithA = (word) =>{ 
    word[0] === 'a';
}

const startsWithC = function(word){
    return word[0] === 'c';
}

const filterWords = function (wordsArr, callback){
    const filteredArr = [];
    for(let word of wordsArr){
        if(callback(word)){
            filteredArr.push(word);
        }
    }

    return filteredArr;
}

const array = ['cat', 'apple', 'canary', 'dog']
const c = filterWords(array, (word)=> word[0] === 'c');
const a = filterWords(array, startsWithA);
console.log(c);
console.log(a);






