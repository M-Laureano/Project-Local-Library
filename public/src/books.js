const accounts = require ("../data/accounts")
const books = require ("../data/books")
const authors = require ("../data/authors")

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {

let bookReturned = []
let bookBorrowed = []
const bookArray = [bookBorrowed,bookReturned]

books.forEach((book) => {
  const bookStatus = book.borrows[0].returned

if (bookStatus) { 
  bookReturned.push(book)
} else { 
  bookBorrowed.push(book)
}
})
return bookArray;
}




function getBorrowersForBook(book, accounts) {
  
let result = [];
let borrowArray = book.borrows
borrowArray.forEach(borrow=>{
  let account = accounts.find(acc => acc.id === borrow.id)
  let obj = account
  obj['returned'] =  borrow.returned
  result.push(obj)
})

return result.slice(0,10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

