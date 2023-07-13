const { Console } = require('console');
const rp = require('request-promise')

const options = {
    uri:'https://jsonplaceholder.typicode.com/posts',
    json:true
}
let postCount = 0;
rp(options)
.then(posts=>{
    //console.log(posts);
    postCount = posts.length;
    //console.log(posts.length);
})
.catch(errors=>{
    console.error(`Error: ${errors}`);
});
//processing.
console.log('This is the end of my code');
if(postCount > 10)
{
    console.log('greater than 10');
}
console.log(postCount);
