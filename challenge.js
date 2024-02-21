const books = require("./books.json");

function priceOfBook(bookName) {
  // write your code here
  if (bookName === "") {
    return "Not Found";
  }
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookName) {
      return books[i].price;
    }
  }
  return "Not found";
}
console.log(priceOfBook("Pride and Prejudice"))

function affordableBooks(budget) {
  // write your code here
  let budgetForBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price <= budget) {
      budgetForBooks.push(books[i].title);
    }
  }
  return budgetForBooks;
}
console.log(affordableBooks(10));

function findBookByGenre(genre) {
  // write your code here
  let BooksSameGenre = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      if (books[i]["genres"][j] === genre) {
        BooksSameGenre.push(books[i].title);
      }
    }
  }
  return BooksSameGenre;
}
console.log(findBookByGenre("Epic"));

function groupByGenre() {
  // write your code here
    const genreGroups = {};
    for (let i = 0; i < books.length; i++) {
      const genres = books[i].genres;
      for (let j = 0; j < genres.length; j++) {
        const genre = genres[j];
        if (!genreGroups[genre]) {
          genreGroups[genre] = [];
        }
        genreGroups[genre].push(books[i]);
      }
    }
    console.log(`Genre groups:`);
    for (const genre in genreGroups) {
      //console.log(`Genre: ${genre}, Books: ${genreGroups[genre].map(book => book.title).join(', ')}`);
    }
    return genreGroups;
}

// -----------------------------------------------------
function sortBooksByPrice() {
  // write your code here
    const sortedBooks = [...books];
    for (let i = 0; i < sortedBooks.length - 1; i++) {
      for (let j = 0; j < sortedBooks.length - 1 - i; j++) {
        if (sortedBooks[j].price > sortedBooks[j + 1].price) {
          const temp = sortedBooks[j];
          sortedBooks[j] = sortedBooks[j + 1];
          sortedBooks[j + 1] = temp;
        }
      }
    }
   // console.log(`Sorted books by price:`);
    //for (const book of sortedBooks) {
      //console.log(`${book.title} - Price: ${book.price}`);}
    return sortedBooks;
}
// ------------------------------------------------
(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
