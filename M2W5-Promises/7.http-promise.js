const rp = require('request-promise');

const options ={
    uri:'https://jsonplaceholder.typicode.com/posts',
    json:true
};

rp(options)
.then(posts=>{
    console.log(posts);
})
.catch(errors=>
{
    console.error(`Error: ${errors}`);
});

console.log('End of File');
//Additional work

//Post data to server - Changing name from Ryan to James
//server responds (ok)
//server then updates name