Feature("Practical Task Number 7 - Loops");

Scenario("PZ7 @C071 foreach(), every(), for...in, for...of, while, do...while", () => {
  //forEach(): method calls a function for each element in an array, method is not executed for empty elements.
  //example 1:
  const items: string[] = ["item1", "item2", "item3"];
  const copyItems: string[] = [];
  // before:
  for (let i: number = 0; i < items.length; i++) {
    copyItems.push(items[i]);
  }
  console.log(copyItems);
  // after using forEach:
  items.forEach((item: string): void => {
    console.log(item);
  });

  //example 2:
  let sum: number = 0;
  const numbers: number[] = [65, 44, 12, 4, 6];
  function myFunction(item): void {
    sum += item;
  }
  numbers.forEach(myFunction);
  console.log(sum);

  //every() method executes a function for each array element,
  //returns true if the function returns true for all elements, returns false if the function returns false for one element,
  //does not execute the function for empty elements, method does not change the original array,
  //array.every(function(currentValue, index, arr), thisValue);
  const listOfPeople = [
    { name: "Steve", answer: "Yes" },
    { name: "Jessica", answer: "Yes" },
    { name: "Peter", answer: "Yes" },
    { name: "Elaine", answer: "No" },
  ];
  //elem - текущий элемент массива;
  //index - индекс текущего элемента;
  //arr - сам массив;
  function isSameAnswer(elem, index, arr): boolean {
    if (index === 0) {
      return true;
    } else {
      return elem.answer === arr[index - 1].answer;
    }
  }
  const result: boolean = listOfPeople.every(isSameAnswer);
  console.log("Is same answer? " + result);

  //for (свойство in объект) {
  //    действия
  //};
  //проходит только по свойствам обьекта;
  const persons: Array<{ name: string; age: number }> = [{ name: "Tom", age: 37 }];
  for (const person in persons) {
    console.log(`person is ${person}`);
  }

  const person: { name: string; age: number } = { name: "Tom", age: 37 };

  for (const field in person) {
    console.log(`person field is ${field}`);
    console.log(person[field]);
  }

  //for ... of: проходит по значениям свойств массива;
  const people: string[] = ["Tom", "Sam", "Bob"];
  for (const man of people) {
    console.log(man);
  }

  //if() break; = цикл завершается на определенном условии;
  //if() continue; = c помощью оператора continue завершается текущая итерация, произойдет переход к следующей итерации;

  //while - цикл выполняется до тех пор, пока некоторое условие истинно;
  // let i = 1;
  // while(i <=5){
  //
  //     console.log(i);
  //     i++;
  // }
  let index: number = 0;
  //цикл выводит каждое число из массива numbers до тех пор, пока не будет конец массива.
  while (index < numbers.length) {
    console.log(`Number: ${numbers[index]}`);
    index++;
  }

  //do while - в цикле do выполняется код цикла, потом происходит проверка условия в инструкции while, пока это условие истинно - цикл повторяется;
  //let i = 1;
  // do{
  //     console.log(i);
  //     i++;
  // }while(i <= 5);
  function printNumbers(): void {
    let number: number = 1;

    do {
      console.log("doNumber: ", number);
      number++;
    } while (number <= 5);
  }
  printNumbers();

  //module example:
  //+= - сложение с последующим присвоением результата;
  //-= - вычитание с последующим присвоением результата;
  const calculator = (function (): any {
    const data = { number: 0 };

    return {
      sum: function (n): void {
        data.number += n;
      },
      subtract: function (n): void {
        data.number -= n;
      },
      display: function (): void {
        console.log("Result: ", data.number);
      },
    };
  })();
  calculator.sum(10);
  calculator.display();
  calculator.sum(3);
  calculator.display(); // Result: 13
  calculator.subtract(4);
  calculator.display(); // Result: 9
});
Scenario("PZ7 @C072 Loops - replaceALL()", () => {
  //не используя методы replace() и replaceAll(), реализовать функцию, которая оставляет в строке только буквы и знаки препинания, а остальные символы убирает:
  //join() method joins all the elements of an array into a string, array.join(separator);
  //concat() - method adds two or more strings and returns a new single string;
  //filter() method creates a new array with all elements that pass the test implemented by the provided function;
  //split() - method splits a String object into an array of strings by separating the string into substrings;
  //regexp /[a-zA-Zа-яА-Я,.!?]/ - check symbol = character or a punctuation mark;
  //test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.

  //example 1:
  function createString(inputString: string): string {
    const filteredString: string[] = inputString.split("").filter((char: string) => {
      return /[a-zA-Zа-яА-Я,.!?]/.test(char);
    });

    return filteredString.join("");
  }

  const inputString: string = "%He(llo12, 8u*se&r5!";
  const result: string = createString(inputString);
  console.log(result);

  //example 2:
  const newString =
    "     Re^gu1lar expre/ss2$ions - ar3e patter4ns us&5ed t6o matc7h charac8ter combi9nat)ions i10n st11ri#ng+s.     ";
  const replaceString = (str: string): string => {
    let result: string = "";
    str = str.trim();
    for (const symbol of str) {
      if (symbol.search(/[^A-Za-z\s.,?:;!-]/)) {
        result = result + symbol;
      }
    }
    return result;
  };
  console.log(replaceString(newString));

  //example 3:
  //функция использует цикл for...of, чтобы перебирать символы входной строки, и фильтрует только буквы и знаки препинания, добавляя их в массив filteredstring2.
  //после завершения цикла, функция объединяет символы в строку и возвращает результат.
  function createString2(inputString: string): string {
    const filteredString2: string[] = [];

    for (const char of inputString) {
      if (/[a-zA-Zа-яА-Я,.!?]/.test(char)) {
        filteredString2.push(char);
      }
    }

    return filteredString2.join("");
  }
  const result2: string = createString2(inputString);
  console.log(result2);

  //реализовать функцию, подсчитывающую сколько раз в строке встречается каждый символ и выводящую 5 наиболее часто используемыx:
  //Object.keys(obj) - это js метод, который возвращает массив строк, представляющих все перечислимые свойства(keys) объекта obj.
  //в функции countTop5Char, charCount - это объект, в котором ключами являются символы, а значениями - количество их вхождений в строку.
  //Object.entries() - метод js, который возвращает массив, содержащий массивы пар ключ-значение для каждого перечислимого свойства объекта obj.
  //Math.min() - метод js, который принимает несколько числовых аргументов и возвращает наименьшее из ниx.
  //sort() - метод отсортировывает массив строк по убыванию, основываясь на количестве вхождений символов из charCount.

  //example 1:
  function countTop5(inputString: string): void {
    const charCount: { [char: string]: number } = {};
    //подсчитываем количество вхождений каждого символа:
    for (const char of inputString) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    //преобразуем countTop5 в массив объектов для сортировки:
    const charCountArray = Object.entries(charCount);
    //сортируем по убыванию количества вхождений:
    charCountArray.sort((a, b) => b[1] - a[1]);
    //выводим 5 наиболее часто используемых символов:
    for (let i = 0; i < Math.min(5, charCountArray.length); i++) {
      const [char, count] = charCountArray[i];
      console.log(`symbol: ${char}, number: ${count}`);
    }
  }
  const inputString2: string = "Typescript is my new love";
  countTop5(inputString2);
  const inputString4: string = "Regular expressions - are patterns used to match character combinations in strings.";
  countTop5(inputString4);

  //example 2:
  function countTop5Char(inputString: string): void {
    const charCountMap: { [char: string]: number } = {};
    //подсчитываем количество вхождений каждого символа
    for (const char of inputString) {
      charCountMap[char] = (charCountMap[char] || 0) + 1;
    }
    //сортируем по убыванию количества вхождений
    const sortedChars = Object.keys(charCountMap).sort((a, b) => charCountMap[b] - charCountMap[a]);
    //выводим 5 наиболее часто используемых символов
    for (let i = 0; i < Math.min(5, sortedChars.length); i++) {
      const char = sortedChars[i];
      const count = charCountMap[char];
      console.log(`Char: ${char}, Count: ${count}`);
    }
  }
  const inputString3: string = "I love TypeScript!";
  countTop5Char(inputString3);

  //exampleD:
  function exampleD(): void {
    const newStringD: string = "Regular expressions - are patterns used to match character combinations in strings."
      .trim()
      .toLowerCase();
    const resultD: { symbol: string; count: number }[] = [];
    for (const newSymbolD of newStringD) {
      const symbolIndex = resultD.findIndex((value) => value.symbol == newSymbolD);
      if (symbolIndex != -1) {
        resultD[symbolIndex].count = resultD[symbolIndex].count + 1;
      } else {
        resultD.push({ symbol: newSymbolD, count: 1 });
      }
    }
    console.log(resultD);
    resultD.sort((a, b) => (a.count > b.count ? -1 : 1));
    console.log("5 Most Used Characters:");
    for (let i = 0; i < 5; i++) {
      console.log(`symbol "${resultD[i].symbol}" is found ${resultD[i].count} times`);
    }
  }
  exampleD();
});

Scenario("PZ7 @C073 Loops - counter", () => {
  //функция сортировки, в которую мы передаем набор цифр и результат возвращается нам выстроенным по уменьшению или по увеличению:
  //example 1:
  function sortNumbersDescending1(numbers: number[]): number[] {
    const sortedNumbers1: number[] = [...numbers];
    //(a, b) => b - a - функия сортировки:
    //если b - a  = положителен, то b будет перед a в отсортированном массиве;
    //если b - a  = отрицателен, то a будет расположено перед b;
    //если b - a = нулю, то порядок чисел не изменяется;
    sortedNumbers1.sort((a, b) => b - a);
    //a больше b = возвращается -1;
    //a равно b = возвращается 0;
    //во всех остальных случаях (когда a меньше b), возвращается 1;
    return sortedNumbers1;
  }
  const inputNumbers1: number[] = [-100, 0.5, 5, 10, 46.7];
  const sortedResult1: number[] = sortNumbersDescending1(inputNumbers1);
  console.log("example 1: " + sortedResult1);
  const sortedResult12: number[] = sortNumbersDescending1([10, 11, 12, -1, 0]);
  console.log("example 11: " + sortedResult12);
});
