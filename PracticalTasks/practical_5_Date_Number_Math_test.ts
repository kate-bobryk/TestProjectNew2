import { randomInt } from "crypto";

Feature("Practical Task Number 5 - Date, Math, Number and Type conversion");
Scenario("PZ5 @C051 Date type", () => {
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
  function main(): number {
    const variable = (): number => randomInt(50);
    return Math.log(variable()) * Math.sqrt(variable()) - Math.exp(variable());
  }
  function timeTracker(): number {
    const getCurrentTime = (): number => new Date().getTime();
    const start = getCurrentTime();
    main();
    const end = getCurrentTime();
    return start - end;
  }
  console.log("Executing time of timeTracker = " + timeTracker());
});

Scenario("PZ5 @C052 Number and Math", () => {
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

Scenario("PZ5 @C053 Type conversion Number <-> String", () => {
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
  const planetsBeforeEarth: string[] = planets.slice(0, planets.indexOf("Earth"));
  //вывести в консоль текст (планеты до земли это ...) и перечисление планет через запятую:
  console.log("Planets before Earth are: " + planetsBeforeEarth.join(", "));

  //создать переменную типа массив содержащую планеты после Земли:
  const planetsAfterEarth: string[] = planets.slice(planets.indexOf("Earth") + 1, planets.length); //либо не ставить end parametr
  //вывести в консоль текст (планеты после земли это ...) и перечисление планет через запятую:
  console.log("Planets after Earth are: " + planetsAfterEarth.join(", "));
});

Scenario("PZ5 @C054 Methods for Number type", () => {
  //реализовать свои примеры использования методов для работы с объектами Number:
  //isNaN() - определяет, является ли объект числом, если объект не является числом, то возвращается значение true;
  //isNaN() преобразует тестируемое значение в число, а затем проверяет его;
  //Number. isNaN() не преобразует значения в число и не возвращает true для любого значения, которое не относится к типу Number;
  //Например, деление нуля на нуль возвращает NaN — но деление других чисел на 0 не возвращает NaN.
  function checkNaN(x: number, y: number): void {
    const result: number = x.valueOf() / y.valueOf();
    //valueOf() возвращает примитивное значение объекта Number
    if (isNaN(result) && x.valueOf() === 0 && y.valueOf() === 0) {
      console.log("Result is NaN");
    } else if (x.valueOf() > 0 && y.valueOf() === 0) {
      console.log("Result is not NaN");
    } else {
      console.log(result);
    }
  }

  const numX: number = Number("5");
  const numY: number = Number(0);
  checkNaN(numX, numY); //"Result is not NaN"
  //const numX: Number = new Number("0");
  //const numY: Number = new Number(0);
  //checkNaN(numX, numY);  //"Result is NaN"

  //parseFloat() - преобразует строку в число с плавающей точкой;
  function whatPrice(price: number): void {
    const updatedPrice: number = Number.parseFloat(price.toString());

    if (!isNaN(updatedPrice)) {
      console.log(`Price is ${updatedPrice}`);
    } else {
      console.log(`Invalid price: ${price}`);
    }
  }
  const first: number = Number.parseFloat("16.50000000");
  whatPrice(first); //Price is 16.5
  const second: number = Number.parseFloat("15hello");
  whatPrice(second); //Price is 15

  //parseInt() - преобразует строку в целое число;
  const a: number = Number.parseInt("15.99");
  console.log(a);
  const b: number = Number.parseInt("-9.999");
  console.log(b);

  //toFixed() - оставляет в числе с плавающей точкой определенное количество знаков в дробной части;
  const c = 10 / 3;
  console.log(c);
  console.log(c.toFixed(3));

  //toString() - преобразования числа в строку;
  console.log(c.toString(2));
  console.log(c.toString(10));
});
