const express = require('express') //npm install this and ejs
const bodyParser = require('body-parser');//npm install this


const app = express()
const port = 3000


app.set('view engine', 'ejs');
app.use(express.json());
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
    res.render('index', {books: bookshelf});
})



// Create (POST) a new book
app.post('/books', (req, res) => {
  console.log(req.body);
    const { title, author, genre, publicationYear } = req.body;
    addBook( title, author, genre, publicationYear);
    bookshelf.push(book);    
    //res.status(201).json({ message: 'Book created successfully.', book });
    res.redirect('/');
  });
  
;

  // Read (GET) all books
  app.get('/books', (req, res) => {
    res.json(bookshelf);
  });

// Read (GET) Add books
app.get('/books/add', (req, res) => {
  res.render('add');
})
  
  // Read (GET) a specific book by title
  app.get('/books/:title', (req, res) => {
    console.log('editing book '  + req.params.title);

    const title = req.params.title;
    const book = bookshelf.find(book => book.title === title);
    
    if (book) {
      res.render('edit', { book });
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  });
  
  // Delete a book by title
  app.post('/books/delete/:title', (req, res) => {
    console.log("Deleting the book");
    const title = req.params.title;
    let deletedBook = removeBook(title);
  
    if (deletedBook) {
    
      console.log({ message: 'Book deleted successfully.', book: deletedBook });
      res.redirect('/');
    } else {
      console.log({ message: 'Book not found.' });
    }

  });

  // Update (PUT) a book by title
  app.post('/books/:title', (req, res) => {
    const title = req.params.title;
    const { author, genre, publicationYear } = req.body;
    const book = bookshelf.find(book => book.title === title);
    
    if (book) {
      book.author = author;
      book.genre = genre;
      book.publicationYear = publicationYear;
      console.log({ message: 'Book updated successfully.', book });
      res.redirect('/');
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  });
  

  


// Initialize the bookshelf as an empty array
let bookshelf = [];

// Function to add a book to the bookshelf
function addBook(title, author, genre, publicationYear) {
  const book = {
    title: title,
    author: author,
    genre: genre,
    publicationYear: publicationYear
  };

  // Add the book to the bookshelf
  bookshelf.push(book);
}

// Function to remove a book from the bookshelf
function removeBook(title) {
  // Find the index of the book with the matching title
  const index = bookshelf.findIndex(book => book.title === title);

  if (index !== -1) {
    // Remove the book from the bookshelf using the index
    var book = bookshelf.splice(index, 1);
    console.log(`Book "${title}" has been removed from the bookshelf.`);
    return book;
  } else {
    console.log(`Book "${title}" not found on the bookshelf.`);
  }
}

// Example usage
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925);
addBook('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960);
addBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 'Fantasy', 1997);

// console.log(bookshelf);
// // Output: [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', publicationYear: 1925 }, { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', publicationYear: 1960 }, { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', publicationYear: 1997 }]

// removeBook('To Kill a Mockingbird');
// console.log(bookshelf);
// // Output: [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', publicationYear: 1925 }, { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', publicationYear: 1997 }]

