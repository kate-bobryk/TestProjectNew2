Feature("Practical Task Number 17 - Сycles and Сonditions;");

Scenario("PZ17 @C01701 Cycles and Conditions", () => {
  //example 1:
  //дано целое число, состоящее из разных цифр (тип переменной number), найти наибольшую цифру числа и вывести ее в консоль (f.e. number 1639485, result max = 9);
  //Math.max() - принимает набор числовых аргументов и возвращает наибольшее из них;
  //Array.from() - создания нового массива из переменной num;
  //String(num) - преобразует число в строку;
  //Number - преобразует каждый символ обратно в число;
  const number: number = 1639485;
  function findMaxNumber(num: number): number {
    const numbers: number[] = Array.from(String(num), Number);
    //console.log(digits); //[1, 6, 3, 9, 4, 8, 5]
    return Math.max(...numbers); //написать вручную (for each записываю новое если нашла больше)
  }

  const resultNumber: number = findMaxNumber(number);
  console.log(`The maximum number is: ${resultNumber}`);

  //example 2:
  //мужчина 1 марта открыл счет в банке, вложив 1000$, через каждый месяц размер вклада увеличивается на 2% от имеющейся суммы, определить:
  //а) за какой месяц величина ежемесячного увеличения вклада превысит 30$;
  //б) через сколько месяцев размер вклада превысит 1200$;
  //const sum = 1000;
  //while do; do while 2 times (a, b)
  //month i+1, sum = sum * 102%
  //2% from sum > 30$ - end of programm
  //sum > 1200$ - end of programm

  //example 3:
  //используются денежные купюры достоинством в 1, 2, 4, 8, 16, 32 и 64, дано натуральное число n.;
  //как наименьшим количеством таких денежных купюр можно выплатить сумму n (указать количество каждой из используемых для выплаты купюр)?(имеется достаточно большое количество купюр всех достоинств);
  //sum = randomInt = < 200 (e.g.100)
  //arrayMoney = [1, 2, 4, 8, 16, 32, 64] (revert)
  //for of
  //{[key: 64, value: 1]
  //[key: 32, value: 1]}
  //вывести ключ + значение в новый обьект 64*1
  //64*1
  //32*1
  //if (64 < 100) {100/64}
  //if (36< 32) {36/32}

  //example 4:
  //написать программу выводящую текущее время в формате "Текущее время 3 часа дня 32 минуты 18 секунд" или "Текущее время 7 часов вечера 31 минута 1 секунда" (обратить внимание на окончания и время суток);
  function currentTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let period;

    if (hours >= 6 && hours < 18) {
      period = "day";
    } else {
      period = "night";
    }

    console.log(
      `Current time is ${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minut${
        minutes !== 1 ? "es" : ""
      } ${seconds} second${seconds !== 1 ? "s" : ""} of ${period}`,
    );
  }

  currentTime(); //сделать как проверку календаря на русском

  //example 5:
  //в календаре был принят 12-летний цикл, годы внутри цикла носили названия животных: крысы, коровы, тигра, зайца, дракона, змеи, лошади, овцы, обезьяны, курицы, собаки и свиньи;
  //написать программу, кот. вводит номер некоторого года и печатает его название по старояпонскому календарю (1996 г. — год Крысы);
  function getChineseYear(year: number): void {
    const animals: string[] = [
      "Крысы",
      "Коровы",
      "Тигра",
      "Зайца",
      "Дракона",
      "Змеи",
      "Лошади",
      "Овцы",
      "Обезьяны",
      "Курицы",
      "Собаки",
      "Свиньи",
    ];

    const startYear: number = 1924;
    const animalIndex: number = (year - startYear) % 12;
    const zodiacAnimal: string = animals[animalIndex];
    console.log(`${year} год ${zodiacAnimal}`);
  }

  getChineseYear(1996); //1996 год Крысы;
  getChineseYear(1997); //1997 год Коровы;
  getChineseYear(2003); //2003 год Овцы;
  getChineseYear(2024); //2024 год Дракона;

  //example 6:
  //вывести самое длинное слово из многомерного массива строк, массив может быть любой размерности;
  const newArray: string[][] = [
    ["apple", "new", "count"],
    ["status", "screenshots", "test"],
    ["fish", "orange", "dream"],
  ]; //результат должен быть слово: screenshots;
  function findLongWord(arr: string[][]): string {
    let longWord = "";
    for (const innerArray of arr) {
      for (const word of innerArray) {
        if (word.length > longWord.length) {
          longWord = word;
        }
      }
    }
    return longWord;
  }

  const resultWord: string = findLongWord(newArray);
  console.log(`The longest word is: ${resultWord}`);
});
