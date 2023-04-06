"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Book;
}());
exports.Book = Book;
var book1 = new Book("The Design of EveryDay Things", "Don Norman", false);
var book2 = new Book("The Most Human Human", "Brian Christian", true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log("You've already read ".concat(books[i].title, " by author ").concat(books[i].author));
    }
    else {
        console.log("You haven't read ".concat(books[i].title, " by author ").concat(books[i].author, " yet!"));
    }
}
