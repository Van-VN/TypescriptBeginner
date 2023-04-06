export class Book {
  title: string;
  author: string;
  alreadyRead: boolean;
  constructor(title: string, author: string, alreadyRead: boolean) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
  }
}

let book1 = new Book("The Design of EveryDay Things", "Don Norman", false);
let book2 = new Book("The Most Human Human", "Brian Christian", true);

let books: Book[] = [];
books.push(book1, book2);

for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log(`You've already read ${books[i].title} by author ${books[i].author}`)
    } else {
        console.log(`You haven't read ${books[i].title} by author ${books[i].author} yet!`)
    }
}