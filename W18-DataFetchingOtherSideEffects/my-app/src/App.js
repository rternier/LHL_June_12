import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const[title, setTitle] = useState("Title Component");


  useEffect(() =>{
    console.log("Title Changed to:"  + title);
    document.title = title;
  }, [title])

  return (
    <div className="App">
      <h1>{title}</h1>
      <input type='text'
          onChange={e=>setTitle(e.target.value)}
          value={title}
          />
    </div>
  );
}

export default App;
