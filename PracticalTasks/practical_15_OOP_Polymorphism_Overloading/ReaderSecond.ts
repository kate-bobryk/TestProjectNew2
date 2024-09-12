import { Book } from "./Book";

export class ReaderSecond {
  name: string;
  libraryCard: number;
  faculty: string;
  dateOfBirth: string;
  phone: number;

  constructor(name: string, libraryCard: number, faculty: string, dateOfBirth: string, phone: number) {
    this.name = name;
    this.libraryCard = libraryCard;
    this.faculty = faculty;
    this.dateOfBirth = dateOfBirth;
    this.phone = phone;
  }

  takeBook(count: number): void;
  takeBook(title: string[]): void;
  takeBook(books: Book[]): void;
  takeBook(booksOrCount: number | Array<string | Book>): void {
    if (Array.isArray(booksOrCount)) {
      if (booksOrCount[0] instanceof Book) {
        let text = "";
        booksOrCount.forEach((book: Book) => (text = text + `${book.getAuthor()}'s "${book.getTitle()}", `));
        console.log(`${this.name} takes ${text.slice(0, -2)} books.`);
      } else {
        console.log(`${this.name} takes ${booksOrCount.join(", ")} books.`);
      }
    } else {
      console.log(`${this.name} takes ${booksOrCount} books.`);
    }
  }
}
