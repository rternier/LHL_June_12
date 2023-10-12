import { useState, useEffect } from 'react';
import './App.css';
//https://jsonplaceholder.typicode.com/

function ResourceButtons() {
const [resourceType, setResourceType] = useState('posts');
const [items, setItems] = useState([]);


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response=>{
       return response.json();
    })
    .then(json =>{ 
        //console.log(json);
        setItems(json);
    })   

}, [resourceType])


return (    
    <>
      <div className="App">
        <button onClick={()=>setResourceType("posts")}>Posts</button>
        <button onClick={()=>setResourceType("users")}>Users</button>
        <button onClick={()=>setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      <div>
        {
            items.map(item=>{
                return <pre>{JSON.stringify(item)}</pre>
            })
        }
      </div>
    </>
  );
}

export default ResourceButtons