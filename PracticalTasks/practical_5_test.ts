import { randomInt } from "crypto";

Feature("Practical Task Number 5 - Date and Type conversion");
Scenario("PZ3 Date type @C01", () => {
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
Scenario("PZ3 Type formatting @C02", () => {
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
