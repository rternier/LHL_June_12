import {useState, useEffect} from 'react'
import './App.css';

function IntervalCounter() {

  const[count, setCount] = useState(0);

  useEffect(()=>{
    console.log("use effect called")
    const counterInterval = setInterval(()=>{
        setCount(prev=>prev+1);
        console.log(count);
        document.title = count;
      },1000);  
      return () =>{
        clearInterval(counterInterval);
      }  
  },[])
  

  //1, 2, 4, 8, 16
  return (
    <div className="App">
     <h2>Interval Counter</h2>
     <p>
        {count} seconds have passed
     </p>
    </div>
  );
}

export default IntervalCounter;
