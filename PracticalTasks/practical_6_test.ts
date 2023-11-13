Feature("Practical Task Number 6 - Conditions and Cycles, Logical Operations");
Scenario("PZ6 Logical operations @C01", () => {
  const num: number = 7;
  const num2: number = 5;
  //const strNum = "5";
  const finalResult: boolean = num != num2;
  console.log(finalResult);
  const result2: boolean = num === num2;
  console.log(result2);
  //const result3: boolean = strNum !== num2;
  //console.log(result3);

  //операция && возвращает true, если оба операнда возвращают true, иначе возвращает false:
  //console.log(true && true);  //true
  //console.log(true && false); //false
  //console.log(false && false); //false
  const age: number = 20;
  age <= 18 && console.log("Age less than 18 years old. Access denied.");
  age > 18 && console.log("Age more than 18 years old. Access provided.");
  //&& возвращает второй операнд, если первый равен true, сначала выполняется первая операцию &&

  //операция || возвращает true, если хотя бы один из операндов равен true, иначе операция || возвращает false:
  //console.log(true || true);  //true
  //console.log(true || false); //true
  //console.log(false || false); //false
  const money: number = 100;
  // проверяем, что age больше 18 или money больше 1000
  const access1: boolean = age > 18 || money > 100;
  console.log(access1);

  //операция ! возвращает true, если операнд равен false, и возвращает false, если операнд равен true:
  console.log(!true); //false
  console.log(!false); //true

  //null = false
  //undefined = false
  //0 = false
  //NaN (not a number) = false
  //boolean false = fasle
  //boolean true = true
  //1 (любое ненулевое значение) = true
  //"" (пустая строка) = false
  //"некоторый текст" (непустая строка) = true
  //{} (любой объект) = true
  //0 - false, 1 - true
  //| (или)
  // 0 | 0 = 0  - false
  // 0 | 1 = 1 - true
  // 1 | 0 = 1 - true
  // 1 | 1 = 1 - true

  // & (и):
  // 0 & 0 = 0 - false
  // 0 & 1 = 0 - false
  // 1 & 0 = 0 - false
  // 1 & 1 = 1 - true

  //&&= - логическая операция с присвоением: a &&= b возвращает b, если и a и b равны true, если любой операнд равен false, то возвращается a.
  //&&= аналогично выполнению a = a && b.
  let first: boolean = true;
  const second: boolean = true;
  first &&= second;
  console.log(first); //true

  //||= тоже самое, a ||= b эквивалентно выражению a = a || b.
  let c = false;
  const d = true;
  c ||= d;
  console.log(c); //true

  //операнд ?: пишется как [первый операнд - условие] ? [второй операнд] : [третий операнд]
  //если условие первого операнда = true, то возвращается второй операнд; если условие равно false, то третий:
  const a: number = 1;
  const b: number = 2;
  const resultOperation = a < b ? a : b;
  console.log(resultOperation); //1
  //example 2:
  const aa: number = 1;
  const bb: number = 2;
  const resultOperation2: number = aa < bb ? aa + bb : aa - bb;
  console.log(resultOperation2); //3

  //оператор ?? (nullish coalescing operator) позволяет проверить значение на null и undefined, принимает два операнда:
  //левый_операнд ?? правый_операнд.
  //оператор ?? возвращает значение левого операнда, если оно НЕ равно null и undefined, иначе возвращается значение правого операнда.
  const result = "hello" ?? "world";
  console.log(result); //hello
  console.log(0 ?? 5); //0
  console.log(null ?? "not null"); //not null
  console.log(undefined ?? "defined"); //defined

  //оператор ??= также позволяет проверить значение на null и undefined:
  //левый_операнд ??= правый_операнд
  //если левый операнд равен null и undefined, то левый = значению правого операнда, иначе левый операнд сохраняет свое значение.
  const message: string = "Hello World";
  let text = null;
  text ??= message;
  console.log(text); //переменная text равна null, поэтому при посредстве оператора ??= она получает значение переменной message)
});

Scenario("PZ6 Conditions @C02", () => {
  //if (действия, если условие = true) пример:
  const income: number = 100;
  const age: number = 19;
  //если одно условие, то убираем скобки if(income > 50) console.log("доход больше 50");
  //если 2+ условия, то скобки оставляем:
  if (income > 50 && age > 18) {
    console.log("income more than 50");
    console.log("age more than 18");
  }

  //else (действия, если условие = false) пример:
  //if(условие){
  //    действия, если условие true
  //}
  //else{
  //    действия, если условие false
  //};
  //если блок else содержит одну инструкцию, то можно сократить:
  const income2: number = 49;
  if (income2 > 50) console.log("income more than 50");
  else console.log("income more or equal than 50");

  //else if мы можем добавить альтернативное условие к блоку if;
  if (income2 > 50) {
    console.log("income more than 50");
  } else if (income2 === 50) {
    console.log("income equal 50");
  } else {
    console.log("income less than 50");
  }
  //блок else применять необязательно;

  //switch..case
  //switch(сравниваемое выражение){
  //    case (сравнимое значение) :
  //        console.log(выполняемое действие);
  //        break;
  //};
  //example:
  //const income = 200;
  //switch(income){
  //    case 100 :
  //        console.log("Доход равен 100");
  //        break;
  //    case 200 :
  //        console.log("Доход равен 200");
  //        break;
  //    case 300 :
  //        console.log("Доход равен 300");
  //        break;
  //};

  //break служит для того, чтобы избежать выполнения других условий.
  //default - условие по умолчанию, для ситуации, когда совпадения не будет найдено, то можно добавить необязательный блок default;

  //cоздать функцию проверяющую длину слова и выводящую "long word" если слово длиннее 7 букв и "short word" если меньше;
  //example 1:
  function checkString(a: string): void {
    if (a.length >= 7) {
      console.log("long word");
    } else {
      console.log("short word");
    }
  }
  checkString("shortSt");
  checkString("short");

  //example 2:
  function checkWordLength2(world: string): void {
    console.log(`${world} is ${world.length > 7 ? "long" : "short"} word`);
  }
  checkWordLength2("language");

  //cоздать функцию аналогичную первой но используя не if else конструкцию а condition ? true : false (Тернарная операция);
  const checkString3 = (a: string): string => (a.length > 7 ? "long word" : "short word");
  console.log(checkString3("justAnotherString"));
  console.log(checkString3("another"));
  //const sum = (x: number, y: number) => x + y.
});

Scenario("PZ6 Conditions and Logical Operations @C03", () => {
  //написать функцию проверки и вывода даты, в которую мы будем передавать месяц день и год в формате number
  //и которая после проверки (что мы не вводили отрицательных значений и т.д), если числа правильные, будет вызывать функцию вывода в консоль даты
  //дата в формате f.e. "The 11 of November, 2023" (не используя формат Date а делая выбор месяца через switch case).

  //example of printDate function with Date object:
  // const inputDate: Date = new Date(2023, 13, 9);
  // function printDate(date: Date): void {
  //     const day: number = date.getDay();
  //     const monthName: string = date.toLocaleString('default', { month: 'long' });
  //     //console.log(monthName);
  //     const year: number = date.getFullYear();
  //     console.log(`The ${day} of ${monthName}, ${year}`);
  // }
  // printDate(inputDate);

  //example 1:
  function printDateEx1(a: number, b: number, c: number): void {
    let month: string;
    switch (b) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      default:
        month = "December";
    }
    console.log(`The ${a} of ${month}, ${c}`);
  }
  printDateEx1(10, 12, 2023);

  //Number.isInteger() метод, который проверяет целое число или нет;
  //! - возвращает true, если операнд равен false, и возвращает false, если операнд равен true;
  //=== - сравнивает два значения и их тип;
  //&& - возвращает true, если оба операнда возвращают true, иначе возвращает false;
  //|| - возвращает true, если хотя бы один из операндов равен true, иначе операция || возвращает false;
  function checkDataEx1(a: number, b: number, c: number): void {
    if (!Number.isInteger(a) || a <= 0 || a > 31) {
      console.log("Invalid day number. Please provide an integer between 1 and 31.");
    } else if (!Number.isInteger(b) || b <= 0 || b > 12) {
      console.log("Invalid month number. Please provide an integer between 1 and 12.");
    } else if (b === 2 && (a > 29 || a === 29)) {
      console.log("Invalid day for February. Please provide an integer between 1 and 28.");
    } else if (!Number.isInteger(c) || c <= 0) {
      console.log("Invalid year number. Please provide an integer greater than 0.");
    } else {
      printDateEx1(a, b, c);
    }
  }
  checkDataEx1(31, 4, 2023);

  //example 2:
  function printDataEx2(day: number, month: number, year: number): void {
    let monthName: string;
    switch (month) {
      case 1:
        monthName = "January";
        break;
      case 2:
        monthName = "February";
        break;
      case 3:
        monthName = "March";
        break;
      case 4:
        monthName = "April";
        break;
      case 5:
        monthName = "May";
        break;
      case 6:
        monthName = "June";
        break;
      case 7:
        monthName = "July";
        break;
      case 8:
        monthName = "August";
        break;
      case 9:
        monthName = "September";
        break;
      case 10:
        monthName = "October";
        break;
      case 11:
        monthName = "November";
        break;
      default:
        monthName = "December";
    }
    console.log("The " + day + " of " + monthName + ", " + year);
  }
  function printDataSecondEx2(day: number, month: number, year: number): void {
    const monthName = (month: number): string => {
      return {
        [1]: "January",
        [2]: "February",
        [3]: "March",
        [4]: "April",
        [5]: "May",
        [6]: "June",
        [7]: "July",
        [8]: "August",
        [9]: "September",
        [10]: "October",
        [11]: "November",
        [12]: "December",
      }[month];
    };
    console.log("The " + day + " of " + monthName(month) + ", " + year);
  }
  function printDataThirdEx2(day: number, month: number, year: number): void {
    const monthName = (month: number): string => {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][month - 1];
    };
    console.log("The " + day + " of " + monthName(month) + ", " + year);
  }

  function checkDateEx2(day: number, month: number, year: number): void {
    if (
      year <= 0 ||
      !Number.isInteger(year) ||
      month > 12 ||
      month <= 0 ||
      !Number.isInteger(month) ||
      day > 31 ||
      day <= 0 ||
      !Number.isInteger(day)
    ) {
      if (year <= 0 || !Number.isInteger(year)) {
        console.log("Wrong year value!");
      } else if (month > 12 || month <= 0 || !Number.isInteger(month)) {
        console.log("Wrong month value!");
      } else {
        console.log("Wrong day value!");
      }
    } else {
      if (month == (2 || 4 || 6 || 9 || 11)) {
        if (day > 30) {
          console.log("We can't have more then 30 days in this month!");
        } else if (month == 2 && day > 29) {
          console.log("We can't have more then 29 days in February!");
        } else {
          if ((year % 4 == 0 && month == 2 && day <= 29) || (year % 4 != 0 && month == 2 && day <= 28)) {
            printDataEx2(day, month, year);
            printDataSecondEx2(day, month, year);
            printDataThirdEx2(day, month, year);
          } else {
            if (year % 4 != 0 && month == 2 && day == 29) {
              console.log("In this year we can't have 29 of February!");
            } else {
              printDataEx2(day, month, year);
              printDataSecondEx2(day, month, year);
              printDataThirdEx2(day, month, year);
            }
          }
        }
      } else {
        if (day > 31) {
          console.log("We can't have more then 31 days in this month!");
        } else {
          printDataEx2(day, month, year);
          printDataSecondEx2(day, month, year);
          printDataThirdEx2(day, month, year);
        }
      }
    }
  }
  checkDateEx2(0, 1, 1);
  checkDateEx2(1, 0, 1);
  checkDateEx2(1, 1, 0);
  checkDateEx2(1, 13, 1);
  checkDateEx2(32, 1, 1);
  checkDateEx2(30, 2, 1);
  checkDateEx2(3, 11, 2023);
  checkDateEx2(28, 2, 2000);
  checkDateEx2(29, 2, 2000);
  checkDateEx2(29, 2, 2001);
  checkDateEx2(0, 4.5, 1.009);
  checkDateEx2(1, 0.01, 1);
  checkDateEx2(1, 1, 0);
});
