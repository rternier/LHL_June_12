function BookItem(props){

const deleteBook = () =>{
    props.delete(props.index);
}

    return(
            <li>
                <span>{props.text}</span>
                <button onClick={deleteBook}>-</button>
            </li>
    );
}

export default BookItem;