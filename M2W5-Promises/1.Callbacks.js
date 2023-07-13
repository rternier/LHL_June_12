/*
    Review of Callbacks
*/
const addTwoNumbers = (num1, num2, callback) =>
{
    const result = num1 + num2;
    callback(result);
}

addTwoNumbers(1, 2, (result)=>{
    console.log(result);
});

setTimeout(() => {
    console.log('3 seconds elapsed');
}, 3000);

setTimeout(() => {
    console.log('2 seconds elapsed');
}, 2000);

