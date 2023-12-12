import { Book } from "./Book";
import { Reader } from "./Reader";
import { ReaderSecond } from "./ReaderSecond";

Feature("Practical Task Number 15 - Method Overloading;");

Scenario("PZ15 @C01501 Method Overloading", () => {
  //метод перегрузки — это возможность создавать несколько одноименных функций с разными реализациями, позволяя одному вызову функции выполнять разные задачи в зависимости от контекста;
  //основная функция объявляется последней;
  //перегрузки располагаются от наиболее специфических к наименее, переход вниз идет от более ограничивающих к менее ограничивающим;
  //не писать несколько перегрузок, отличающихся только конечными параметрами (использовать optional?);
  //не писать перегрузки, отличающиеся типом только в одном типе аргумента (применить объединения типов type|type);
  //function foo(arg1: number, arg2: number): number;
  // function foo(arg1: string, arg2: string): string;
  // function foo(arg1: string | number, arg2: string | number) {
  //   return arg1 || arg2;
  // }
  //example KB:
  const jackSmith: Reader = new Reader("Jack Smith", null, "", null, 123456);
  //console.log(jackSmith.getPhone());
  const prideAndPrejudice: Book = new Book("Pride and Prejudice", "Jane Austen");
  const emma: Book = new Book("Emma", "Jane Austen");

  jackSmith.takeBook(2); // Jack Smith took 2 books.
  jackSmith.takeBook(["Pride and Prejudice", "Emma"]); //Jack Smith took the following books: Pride and Prejudice, Emma.
  jackSmith.takeBook(["Pride and Prejudice", null]); //Invalid parameters.
  jackSmith.takeBook(prideAndPrejudice, emma);
  //Jack Smith took the following books:
  //Pride and Prejudice by Jane Austen
  //Emma by Jane Austen
  //обработка ошибок:
  jackSmith.takeBook(null); //Invalid parameter: null.
  jackSmith.takeBook([null]); //Invalid parameters.
  jackSmith.takeBook(); //No parameters provided.
  jackSmith.takeBook(undefined); //Invalid parameters.

  //example DK:
  const dataUser1 = new ReaderSecond("Ivan", 1, "Economics", "16112000", 111111111);
  const dataUser2 = new ReaderSecond("Anna", 2, "Higher Mathematics", "08042000", 222222222);
  const dataUser3 = new ReaderSecond("Pavel", 3, "Economics", "05122001", 333333333);

  dataUser1.takeBook(5);
  dataUser2.takeBook(["Pinocchio", "Encyclopedia"]);
  dataUser3.takeBook([new Book("War and Peace", "Tolstoy"), new Book("Nose", "Gogol")]);
});
