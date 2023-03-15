const accounts = require ("../data/accounts")
const books = require ("../data/books")
const authors = require ("../data/authors")

function findAccountById(accounts , id) {

  let result = accounts.find(accountObj => accountObj.id === id)
  return result
 }



function sortAccountsByLastName(accounts) {

    let result = accounts.sort((accountOne, accountTwo) => (
    accountOne.name.last.toLowerCase() > accountTwo.name.last.toLowerCase() ? 1 : -1 ))
  return result    
  }



function getTotalNumberOfBorrows(accounts, books) {

  let total = 0
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if( accounts.id === books[i].borrows[j].id ) {
      total += 1
      }
  }
}
  return total
}



function getBooksPossessedByAccount(account, books, authors) {
  
  let booksPossessed=[];
  
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  
  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  return booksPossessed;
  
}




 module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
 };


