const accounts = require ("../data/accounts")
const books = require ("../data/books")
const authors = require ("../data/authors")

function getTotalBooksCount(books) {
    return books.length
}

 function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let bookCount = 0
  books.filter(book => {
    if (!book.borrows[0].returned)
    bookCount ++
  }) 
return bookCount
}

 function getMostCommonGenres(books) {

    let genreCount = {}
    books.forEach(book => {
      if (genreCount[book.genre]!= null){
        genreCount[book.genre] ++
      }else {
        genreCount[book.genre] = 1
      }
    })

    let hold = []
    for (const [name, count] of Object.entries(genreCount)) {
      hold.push({
        'name' : name,
        'count' : count })
      }
      hold.sort((a,b) => a.count > b.count ? -1 : 1)
      return hold.slice(0,5)
} 

function getMostPopularBooks(books) {
  
  let hold = []
  books.reduce((acc,book) => {
     hold.push({
      'name' : book.title,
      'count' : book.borrows.length })
     },[])
    hold.sort((a,b) => a.count > b.count ? -1 : 1)
    return hold.slice(0,5)
} 

function authorName(author){
  
   return { name: `${author.name.first} ${author.name.last}`,count: 0}
}

function getMostPopularAuthors(books, authors) {

  let hold = [];
  authors.map((author) => {
   const aName = authorName(author)
   books.forEach((book) => {
    if (book.authorId === author.id) {
     aName.count += book.borrows.length;
    }
   })
   hold.push(aName)
  })
  
 return sortAndSlice(hold)
 
}

function sortAndSlice(array) {
  return array.sort((a, b) => b.count - a.count).slice(0, 5);
}






module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
