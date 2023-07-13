const request = require('request');


const tasks =[
    request('https://jsonplaceholder.typicode.com/posts'),
    request('https://jsonplaceholder.typicode.com/posts'),
    request('https://jsonplaceholder.typicode.com/posts')
];

Promise.all(tasks)
.then(responses=>{
    responses.forEach(response=>{
        console.log(response);
    });        
})
.catch(error=>{
    console.log(error);
});

