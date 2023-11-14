import { randomInt } from "crypto";

Feature("Practical Task Number 4 - Functions and Recursion");
Scenario("PZ4 @C041 Functions", () => {
  //создать функцию hello без параметров и возвращающую "Hello".
  function hello(): string {
    return "Hello";
  }
  console.log(hello());

  //создать функцию display, которая выводит в консоль то, что в нее передали.
  function display(i: string): void {
    console.log(i);
  }
  display("test");

  //создать функцию getName с одним обязательным параметром firstName и вторым необязательным lastName и возвращающую имя фамилию через знак пробела.
  const firstName: string = "Ivan";
  const lastName: string = "Petrov";
  function getName(firstName, lastName?): string {
    return firstName + " " + lastName;
  }
  console.log(getName(firstName, lastName));

  //вызвать функцию display передав в нее строку с вызовом функций hello и getName чтобы получилось: "Hello Ivan Petrov!".
  display(hello() + " " + getName(firstName, lastName));

  //по аналогии с пунктом 4 вызвать функцию display, но в этот раз передать в getName один параметр вместо двух.
  display(hello() + " " + getName(firstName));

  //создать функцию getFullName с одним обязательным параметром firstName и вторым дефолтным lastName = "Ivanov" и возвращающую имя фамилию через знак пробела.
  function getFullName(a, b: string = "Ivanov"): string {
    return a + " " + b;
  }
  console.log(getName(firstName, lastName));

  //вызвать функцию display передав в нее строку с вызовом функций hello и getFullName чтобы получилось: "Hello Ivan Petrov!".
  display(hello() + " " + getFullName(firstName, lastName));

  //по аналогии с пунктом 7 вызвать функцию display, но в этот раз передать в getFullName один параметр вместо двух.
  display(hello() + " " + getFullName(firstName));

  //создать функцию createString с нетипизированными параметрами a и b, возвращающую результат a + b.
  function createString(a: any, b: any): any {
    return a + b;
  }
  console.log(createString("a", "b"));

  //вывести в консоль результат выполнения функции createString, где а = 1 (число), b = 2 (число).
  console.log(createString(1, 2));

  //вывести в консоль результат выполнения функции createString, где а = "1" (строка), b = "2" (строка).
  console.log(createString("1", "2"));

  //создать функцию multiplicationFunc с типизированными параметрами a (число) и b (число), выводящую в консоль результат в таком виде: a * b = result.
  function multiplicationFunc(a: number, b: number): void {
    console.log(`${a} * ${b} = ${a * b}`);
  }
  multiplicationFunc(2, 5);

  //создать стрелочную функцию multiplication которая будет работать так же, как и multiplicationFunc:
  //const sum = (x: number, y: number) => x + y.
  const multiplication = (a: number, b: number): void => console.log(`${a} * ${b} = ${a * b}`);
  multiplication(5, 5);

  //создать непараметризуемую  функцию main, которая ничего не возвращает,
  //в теле функции main создать переменную variable стрелочного типа, которая будет равна результату выполнения функции randomInt(50),
  //в теле функции main вызвать функцию multiplicationFunc и передать туда в качестве параметров (variable(), variable()),
  //в теле функции main вызвать функцию multiplication и передать туда в качестве параметров (variable(), variable()).
  function main(): void {
    const variable = (): number => randomInt(50);
    multiplicationFunc(variable(), variable());
    multiplication(variable(), variable());
  }

  //вызвать функцию main.
  main();

  //создать переменную message типа функции без параметров, которая ничего не возвращает и присвоить ей значение функции main.
  const message: () => void = main;

  //вызвать переменную message (обратиться к переменной).
  message();

  //создать функцию isBelowThreshold с неопределенным количеством параметров, которая выводит в консоль все ли элементы массива меньше 40 (использовать метод every() для массивов, а в качестве параметра передавать стрелочную функцию).
  function isBelowThreshold(...array1: number[]): void {
    console.log(
      "isBelowThreshold: ",
      array1.every((value: number) => value < 40),
    );
  }

  //вызвать функцию isBelowThreshold, передав в нее (1, 30, 39, 29, 10, 13).
  isBelowThreshold(1, 30, 39, 29, 10, 13);

  //вызвать функцию isBelowThreshold, передав в нее (15, 40, -12, 52).
  isBelowThreshold(15, 40, -12, 52);
});

Scenario.skip("PZ4 @C042 Recursion", () => {});
