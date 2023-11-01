import { randomInt } from "crypto";

Feature("Practical Task Number 4");

Scenario("PZ3 Math @C01", () => {
  //Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
  //Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
  const arrayN1: number[] = [1, 14, 15, -5, 27, 0, 34];
  console.log("The min value from arrayN1 is " + Math.min(...arrayN1));
  console.log(`The max value from arrayN1 is ${Math.max(...arrayN1)}`);

  //Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
  console.log(Math.floor(1.95));
  console.log(Math.floor(-1.95));

  //Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
  const arrayN: number[] = Array(10) //array size is 10,
    .fill(undefined)
    .map(() => Math.floor(30 * Math.random())); //numbers from 0-30 (exclusive).
  console.log(arrayN);

  //Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
  console.log(Math.sign(7));
  console.log(Math.sign(-7));

  //Math.round() method for the different number values:
  const number1 = 345.345; //number with decimal part near to zero,
  const number2 = 0.0300011; //number between 0 and 1,
  const number3 = 345.988; //number with decimal part near to one,
  const number4 = Infinity; //infinity value.
  console.log("After rounding the " + number1 + " it's value is " + Math.round(number1));
  console.log("After rounding the " + number2 + " it's value is " + Math.round(number2));
  console.log("After rounding the " + number3 + " it's value is " + Math.round(number3));
  console.log("After rounding the " + number4 + " it's value is " + Math.round(number4));

  //Math.ceil() - static method always rounds up and returns the smallest integer greater than or equal to a given number.
  console.log("The smallest integer greater than or equal to 0,99 is " + Math.ceil(0.99));
  console.log("The smallest integer greater than or equal to 6,01 is " + Math.ceil(6.01));

  //Math.abs() static method returns the absolute value of a number.
  function difference(numberA: number, numberB: number): number {
    return Math.abs(numberA - numberB);
  }
  console.log("Difference between 2 and 10 is " + difference(2, 10));

  //Math.trunc() static method returns the integer part of a number by removing any fractional digits.
  console.log("Integer part of a number 15,55 is " + Math.trunc(15.55));
});

Scenario("PZ3 Functions @C02", () => {
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

  //практика с массивами: реализовать метод filter(), вывести результат в консоль,
  //filter() method creates a new array with all elements that pass the test implemented by the provided function.
  const numbers: number[] = [-1, 0, 5, 25, 34, 100];
  const filteredNumbers: number[] = numbers.filter((num: number): boolean => num <= 25);
  console.log(`Filtered number are ${filteredNumbers}`);
  //example 2:
  const fruits: string[] = ["Apple", "Banana", "Apricot"];
  //const startsWithA = (name: string) => name.startsWith('A');
  const filteredFruits: string[] = fruits.filter((name: string) => name.startsWith("A"));
  console.log("Filtered fruits are " + filteredFruits);
  //example 3:
  const words: string[] = ["bla", "blabla", "blablabla"];
  const result: string[] = words.filter((word: string): boolean => word.length > 5);
  console.log(result);

  //практика с массивами: реализовать метод find(), вывести результат в консоль,
  //find() method of Array instances returns the first element in the provided array that satisfies the testing function.
  const numbers1: number[] = [-1, 10, 0.555, -100];
  const result2: number = numbers1.find((element: number): boolean => element > 0);
  console.log("Elements bigger than 0 is " + result2);
  //example 2:
  const list: { name: string; id: number }[] = [
    { name: "John", id: 1 },
    { name: "Jimmy", id: 2 },
  ];
  const listResult: { name: string; id: number } = list.find(({ name }): boolean => name == "John");
  const listResult2: { name: string; id: number } = list.find(({ name }): boolean => name != "Jimmy");
  list.push({ name: "Jack", id: 3 });
  console.log(list);
  console.log(listResult);
  console.log(listResult2);
});

Scenario("PZ3 Regular_expressions @C03", () => {
  // regexp = /шаблон/,
  // i - поиск не зависит от регистра: нет разницы между A и a,
  // g - поиск ищет все совпадения, без него – только первое,
  // m - многострочный режим,
  // s - режим «dotall», при котором точка . может соответствовать символу перевода строки \n,
  // u - разрешает корректную обработку суррогатных пар (флаг "u" и класс \p{...}),
  // y - поиск на конкретной позиции в тексте,
  // d - результат регулярки помещается в массив, который содержит дополнительную информацию о регулярном выражении, например индексы начала и конца подстрок, не меняет поведение регулярного выражения, а лишь предоставляет дополнительную информацию.

  //exec() - search for a match in a string, returns an array of information or null on a mismatch.
  //шаблон /\w+/g - находит первое слово в строке.
  const example: string = "1 My cats name is Matilda 11";
  const regexp = /\w+/g;
  console.log(regexp.exec(example));
  regexp.lastIndex = 5;
  console.log(regexp.exec(example));
  //последовательные вызовы regexp.exec могут найти все совпадения, представляя собой альтернативу методам str.match()/matchAll().

  //test() - regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false,
  //похож на includes() метод со строками.
  const result: boolean = /name/g.test(example);
  console.log("Does 'name' exist in example? " + result);

  // match() - .match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
  // шаблон /^\d/gm берёт цифру с начала каждой строки.
  console.log("Number from the beginning of the string is " + example.match(/^\d/gm));
  console.log("Cats name is " + example.match(/matilda/gi));
  console.log(example.match(/[A-Z]atilda/gi));
  const regexpWithoutM = /\b[a-ln-z]+\b/gi;
  console.log("Words without 'm' are: " + example.match(regexpWithoutM));

  //search() - tests for a match in a string, returns the index of the match, or -1 if the search fails.
  const regexpSearch = /My.+/;
  console.log("The index of the first match is " + example.search(regexpSearch));

  //replace() - .replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
  const myName: string = "Kate Bobryk";
  const regexpRevert = /(\w+) (\w+)/;
  console.log("My revert name is " + myName.replace(regexpRevert, "$2 $1"));

  //split() - uses a regular expression or a fixed string to break a string into an array of substrings.
  console.log("cat, dog, bird".split(/,\s*/));
  console.log(example.split(/\W/gi));

  //matchAll() - returns an iterator containing all of the matches, including capturing groups.
  const badString2: string = "0s1t2r3i4n5g6";
  const regexNew = /[0-9]/g;
  console.log("matchAll: ", badString2.matchAll(regexNew).next());
  //example 2:
  const regexNew2 = /t(e)(st(\d?))/g;
  const strTest: string = "test1test2";
  const array = [...strTest.matchAll(regexNew2)];
  console.log(array[0]);

  //прохождение по циклу по всем элементам.
  const matchAll = badString2.matchAll(regexNew);
  for (const match of matchAll) {
    console.log(match);
  }

  //replaceAll() - search for all matches in a string, and replaces the matched substrings with a replacement substring.
  console.log("replaceAll: ", badString2.replaceAll(regexNew, " "));
  //example 2:
  const exampleName: string = "My friends name is Oleg";
  const newName = exampleName.replaceAll(/Oleg/gi, "Ivan");
  console.log(newName);
});

Scenario("PZ3 Date type @C04", () => {
  //вывести текущую дату/время используя toLocaleString() - method of Date instances returns a string with a language-sensitive representation of this date.
  //Poland time:
  const todayDate: Date = new Date();
  console.log(todayDate);
  console.log(todayDate.toLocaleString("en-US", { timeZone: "UTC" }));
  console.log("Ex.1: Today date/time in Poland is " + todayDate.toLocaleString("pl-PL", { timeZone: "UTC" }));
  console.log("Ex.2: Today date/time in Poland is " + todayDate.toLocaleString("pl-PL"));
  //default time:
  console.log("Default date/time from my laptop is " + todayDate.toLocaleString());
  //US time with 24h/12h formats:
  console.log("Today 24h date/time in US is " + todayDate.toLocaleString("en-US", { hour12: false }));
  console.log("Today 12h date/time in US is " + todayDate.toLocaleString("en-US", { hour12: true }));

  //toLocaleDateString() - method of Date returns a string with a language-sensitive representation of the date portion of the specified date in the user's timezone:
  //const todayDate2: Date = new Date(Date.UTC(2023, 10, 30, 18, 0, 0));
  console.log("Today default date is " + todayDate.toLocaleDateString());
  console.log("Today date in Denmark is " + todayDate.toLocaleDateString("de-DE"));

  //toLocaleTimeString() - method of Date returns a string with a language-sensitive representation of the time portion of the date:
  //const todayDate3: Date = new Date('October 30, 2023 18:00:00 GMT+00:00');
  console.log("Today time in US is " + todayDate.toLocaleTimeString("en-US"));
  console.log("Today time in Arabia is " + todayDate.toLocaleTimeString("ar-EG"));

  //создать функцию, которая показывает время выполнения других функций:
  //создать функцию, в кот. сначала фиксируется текущее время,
  //потом вызывается функция, где мы хотим посмотреть сколько она выполняется и снова фиксируется время,
  //а затем возвращается разница в миллисекундах.
  function someFunc(z: number, y: number): number {
    return z + y;
  }
  function timeTracker(): number {
    const start = (): number => new Date().getTime();
    someFunc(5, 6);
    const end = (): number => new Date().getTime();
    return start() - end();
  }
  console.log("Время выполнения timeTracker = " + timeTracker()); //0
});

Scenario("PZ3 Type formatting @C05", () => {
  //преобразование типов (строка в число и обратно): использовать .toString(), .Number().
  //создать переменную value1 = "5", и переменную value2 = 5:
  const value1: string = "5";
  const value2: number = 5;

  //создать переменную sum типа any которая равна сумме value1 и value2:
  const sum = value1 + value2;

  //вывести в консоль тип переменной sum:
  console.log("Type of 'sum' is " + typeof sum);

  //переопределить переменную sum присвоив ей значение value1 конвертированной в тип Number плюс value2:
  const sum2 = Number(value1) + value2;

  //вывести в консоль тип переменной sum:
  console.log("Type of 'sum' is " + typeof sum2);

  //вывести в консоль тип результата выполнения функции toString() на переменной sum:
  console.log("Type of 'sum' is " + typeof sum2.toString());

  //создать переменную newString типа строка и присвоить ей значение "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune":
  const newString: string = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";

  // создать переменную planets типа массива строк и присвоить ей значение разбитой строки newString:
  const planets: string[] = newString.split(",");
  console.log(planets);

  // создать переменную типа массив содержащую планеты до Земли:
  const planetsBeforeEarth: string[] = planets.slice(0, 2);
  //вывести в консоль текст (планеты до земли это ...) и перечисление планет через запятую:
  console.log("Planets before Earth are: " + planetsBeforeEarth);

  //создать переменную типа массив содержащую планеты после Земли:
  const planetsAfterEarth: string[] = planets.slice(3, 8);
  //вывести в консоль текст (планеты после земли это ...) и перечисление планет через запятую:
  console.log("Planets after Earth are: " + planetsAfterEarth);
});
