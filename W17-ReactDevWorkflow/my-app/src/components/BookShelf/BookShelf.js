import {useState} from "react"
import BookItem from '../BookItem/BookItem';
import BookInput from '../BookInput/BookInput';
import './bookshelf.css';


function BookShelf(){

    const [bookItems, setBookItems] = useState([
        {id:0, text:"The Dilbert Principle"}
    ]);

    const renderBookItems = () =>{

        return bookItems.map((book, index) =>{
            return <BookItem text={book.text} index={index} delete={removeBookItem}/>
        });
    }

    const addBookItem = (text) =>{
        const b = {id:bookItems.length + 1, text:text}
        setBookItems([...bookItems, b]);
    }

    const removeBookItem = (index) =>{
        const newBookItems = [...bookItems];
        newBookItems.splice(index, 1);
        setBookItems(newBookItems);

    }

    return(
        <div>
            <div>My React Bookshelf</div>
            
            <BookInput add={addBookItem}/>
            <ul>
                {renderBookItems()}
            </ul>

            <div>
                # of Book: {bookItems.length}
            </div>
        </div>
    );
}

export default BookShelf;