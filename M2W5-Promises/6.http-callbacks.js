const request = require('request');

request('https://jsonplaceholder.typicode.com/posts', {json:true}, (error, res, body)=>
{
    if(error)
        return console.error(error);

    console.log(res);
    //console.log(body);
});