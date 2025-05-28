// The system should have the following functionality:
// Add a new book: A function addBook(library, book) that takes an array library (list of books) and a book object, then adds the book to the library.
// Find a book by title: A function findBook(library, title) that searches for a book by title in the library and returns the book object if found, or null otherwise.
// List all books: A function listBooks(library) that prints all books in the library in a readable format.
// Example Usage
// const library = [];
// addBook(library, { title: “The Hobbit”, author: “J.R.R. Tolkien”, year: 1937 });
// addBook(library, { title: “1984”, author: “George Orwell”, year: 1949 });
// console.log(findBook(library, “1984”));
// // Expected output: { title: “1984", author: “George Orwell”, year: 1949 }
// listBooks(library);
// // Expected output:
// // Title: The Hobbit, Author: J.R.R. Tolkien, Year: 1937
// // Title: 1984, Author: George Orwell, Year: 1949
// ⸻
// Guideline to Solve the Problem
// Understand Objects and Arrays:
// 	•	A book should be represented as an object with properties (title, author, year).
// 	•	The library should be an array storing multiple book objects.
// Implement Functions:
// 	•	addBook: Push the new book object into the library array.
// 	•	findBook: Use array methods (like .find()) to search for a book by title.
// 	•	listBooks: Iterate over the array and print book details.
// Test Your Code:
// 	•	Start with an empty library array.
// 	•	Add books, search for a book, and list all books to verify functionality. (edited)

let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let book1 = { title: "1984", author: "George Orwell", year: 1949 };
let library = [];

function addBook(library, book) {
  library.push(book, book1);
  console.log(library);
}
addBook(library, book, book1);

console.log("<<<==========================>>>");

function findBook(library, title) {
  //   for (let i = 0; i < library.length; i++) {
  //     if (library[i].title === title) {
  //       return library[i];
  //     }
  //   }
  //   return null;

  return library.find((book) => book.title === title) || null;
}
console.log(findBook(library, "The Hobbit"));

console.log("<<<==========================>>>");

function listBooks(library) {
  for (let i = 0; i < library.length; i++) {
    let Book = library[i];
    console.log(
      " Title " + Book.title + " Author " + book.author + " Year " + Book.year
    );
  }
}
listBooks(library);
