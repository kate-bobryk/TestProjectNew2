import { Book } from "./Book";
export class Reader {
  constructor(
    private fullName: string,
    private readerId?: number,
    private faculty?: string,
    private birthDate?: Date,
    private phoneNumber?: number,
  ) {
    this.fullName = fullName;
    this.readerId = readerId;
    this.faculty = faculty;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
  }
  getPhone(): number {
    return this.phoneNumber;
  }

  takeBook(count: number): void; //первая перегрузка
  takeBook(titles: string[]): void; //вторая перегрузка
  takeBook(...books: Book[]): void; //третья перегрузка

  //unknown[] обеспечивает безопасность типов, требуя явного приведения типов перед использованием;
  //... - оператор расширения позволяет обрабатывать разные перегрузки функции, принимая переменное количество аргументов разных типов;
  //isArray() - проверяет является ли объект массивом;
  //every() - проверяет, все ли элементы в массиве удовлетворяют тесту, реализованному в заданной функции;
  //forEach() - перебирает все элементы массива;

  //основная функция:
  takeBook(...args: unknown[]): void {
    try {
      if (args.length === 0) {
        throw new Error("No parameters provided.");
      }

      if (args.some((arg): boolean => arg === null)) {
        throw new Error("Invalid parameter: null.");
      }

      if (typeof args[0] === "number") {
        console.log(`${this.fullName} took ${args[0]} books.`);
      } else if (
        Array.isArray(args[0]) &&
        (args[0] as Array<string>).every((item): boolean => typeof item === "string")
      ) {
        const titles: string[] = args[0] as string[];
        console.log(`${this.fullName} took the following books: ${titles.join(", ")}.`);
      } else if (args.every((arg): boolean => arg instanceof Book)) {
        console.log(`${this.fullName} took the following books:`);
        args.forEach((book: Book) => console.log(`${book.getTitle()} by ${book.getAuthor()}`));
      } else {
        throw new Error("Invalid parameters.");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("Take book operation complete.");
    }
  }
}
