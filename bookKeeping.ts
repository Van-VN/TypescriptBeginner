export class Book {
  ID: string;
  name: string;
  constructor(ID: string, name: string) {
    this.ID = ID;
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(input: string) {
    this.name = input;
  }
  getID() {
    return this.ID;
  }
}

export class BookManager {
  books: Book[] = [];

  constructor() {}

  add(book: Book): void {
    this.books.push(book);
  }

  getList(): Book[] {
    return this.books;
  }

  delete(ID: string): void {
    let indexBookDelete = this.findBook(ID);
    if (indexBookDelete != -1) {
      this.books.splice(indexBookDelete, 1);
    } else {
      throw new Error("delete error");
    }
  }

  update(ID: string, name: string) {
    let indexBookUpdate = this.findBook(ID);
    if (indexBookUpdate != -1) {
      this.books[indexBookUpdate].setName(name);
    } else {
      throw new Error("update error");
    }
  }

  findBook(ID: string) {
    let i = -1;
    this.books.forEach((book, index) => {
      if (book.ID === ID) {
        i = index;
      }
    });

    return i;
  }
}

let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')

console.log(bookManager.getList())