// const books = [
//    {
//      title: 'Book',
//      author: 'Name'
//    },
//    {
//      title: 'Book2',
//      author: 'Name2'
//    },
//    {
//       title: undefined,
//       author: 'Name2'
//     }
//  ]
const getTheTitles = function(array) {
   return array.map(book => book.title) 
}
// console.table(getTheTitles(books))
module.exports = getTheTitles;
