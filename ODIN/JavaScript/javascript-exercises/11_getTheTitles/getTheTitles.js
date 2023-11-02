const getTheTitles = function(books) {
    let result = [];
    result = books.map(function(book){
      return book.title;
    })
          return result;
}


// Do not edit below this line
module.exports = getTheTitles;
