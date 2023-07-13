/*
    Promises
*/

const startsWithA =(word) => {
    return word[0] === 'A';
}

const myName = 'Adam';
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('My name is ' + myName);
        if(startsWithA(myName))
        {
            resolve('Stars with A');
        }
        else{
            reject('Does not start with A');
        }
    }, 3000)
})

promise.then((result)=>{
    console.log('Resolved with result:' + result);
})
.catch((result)=>{
    console.log('Rejected with result:' + result);
});
