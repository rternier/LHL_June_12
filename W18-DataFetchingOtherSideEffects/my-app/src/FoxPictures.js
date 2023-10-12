import { useState, useEffect } from 'react';
import './App.css';
//https://jsonplaceholder.typicode.com/

function FoxPictures() {
    const [foxPix, setFoxPix] = useState([]);
    const [foxNumber, setFoxNumber] = useState(0);

const fox_url = 'https://randomfox.ca/floof';

useEffect(()=>{
    
    fetch(fox_url)
    .then((response)=>{
        return response.json();
    })
    .then((foxInfo) =>{
        console.log(foxInfo);
        setFoxPix(prev =>{
            return [...prev, foxInfo];
        });
    });
}, [foxNumber])

useEffect(() =>{
    document.title = foxNumber + "foxes";
})

const addFox = ()  =>{
    setFoxNumber(prev => prev + 1);
}



return (
    <section>
        <h2>Fox Pictures</h2>
        <ul>
        {
            foxPix.map((pic, index)=>
                <li>
                    <img src={pic.image}/>
                 </li>
            )
        }
        </ul>

        <button onClick={addFox} >Load Another</button>
    </section>
)

}

export default FoxPictures;

