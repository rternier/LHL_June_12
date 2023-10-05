import { useState } from "react";

function BookInput(props){
    const [inputValue, setInputValue] = useState("");

const handleAddButton = () =>{
    props.add(inputValue);      
    setInputValue("")  ;
}

const handleInput = (event) =>{
    setInputValue(event.target.value);
}

    return (
        <div>            
            <input type="text"
                value={inputValue}
                onChange={handleInput}
                placeholder="Add Book..." 
            ></input>
            <button onClick={handleAddButton}>Add</button>
        </div>
    );
}

export default BookInput;