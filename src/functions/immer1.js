// use immer.js to realise an immutable programming
//

import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updatedBook = publish(book);
// console.log(book.get("title"));
console.log(book);
console.log(updatedBook);
