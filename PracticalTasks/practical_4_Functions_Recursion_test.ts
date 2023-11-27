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

Scenario("PZ4 @C042 Recursion", () => {
  //реализовать функцию вычисления факториала числа;
  //факториал числа (n!) - это произведение всех положительных целых чисел от 1 до этого числа;
  //факториал числа равен произведению n на факториал числа (n−1);
  //например 5!=5×4×3×2×1=120
  function factorial(n): number {
    //при вызове factorial(n), сначала проверяется условие: если n равно 1, то функция возвращает 1, если не равно, то переходим в блок else
    if (n === 1) {
      return 1;
    } else {
      //каждый рекурсивный вызов умножает текущее значение n на результат факториала для (n - 1):
      //умножаем текущее значение n (5) на результат факториала для (n - 1) = factorial(4) и тд;
      return n * factorial(n - 1);
    }
  }
  const resultFactorial = factorial(5);
  const resultFactorial1 = factorial(1);
  console.log(resultFactorial); //120;
  console.log(resultFactorial1); //1; - базовый случай: если n равно 1, то функция возвращает 1;
  //factorial(5) = 5 * factorial(4)
  // = 5 * (4 * factorial(3))
  // = 5 * (4 * (3 * factorial(2)))
  // = 5 * (4 * (3 * (2 * factorial(1))))
  // = 5 * (4 * (3 * (2 * 1)))
  // = 5 * (4 * (3 * 2))
  // = 5 * (4 * 6)
  // = 5 * 24 = 120;

  //реализовать функцию определения числа Фибоначчи;
  //числа Фибоначчи - это последовательность чисел, где каждое следующее число равно сумме двух предыдущих, начинается с 0 и 1.
  function fibonacci(n): number {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  const resultFibonacci = fibonacci(7);
  console.log(resultFibonacci); //13;
  // fibonacci(7) вызывает fibonacci(6) + fibonacci(5).
  // fibonacci(6) вызывает fibonacci(5) + fibonacci(4).
  // fibonacci(5) вызывает fibonacci(4) + fibonacci(3).
  // fibonacci(4) вызывает fibonacci(3) + fibonacci(2).
  // fibonacci(3) вызывает fibonacci(2) + fibonacci(1).
  // fibonacci(2) вызывает fibonacci(1) + fibonacci(0).
  // fibonacci(1) равно 1.
  // fibonacci(0) равно 0.
  // fibonacci(2) равно 1 + 0, что равно 1.
  // fibonacci(3) равно 1 + 1, что равно 2.
  // fibonacci(4) равно 2 + 1, что равно 3.
  // fibonacci(5) равно 3 + 2, что равно 5.
  // fibonacci(6) равно 5 + 3, что равно 8.
  // fibonacci(7) равно 8 + 5, что равно 13.

  //реализовать функцию вычисления экспоненты числа;
  //экспонента - функция, где число Эйлера e (e≈2,718) возводится в степень аргумента x;
  //example 1:
  //Math.exp() - static method returns e raised to the power of a number;
  const exponentMath = (a: number, n: number): number => {
    return Math.exp(n * Math.log(a));
  };

  console.log(exponentMath(4, 2)); //15.999999999999998;

  //example 2:
  const exponent = (a: number, n: number): number => {
    if (n === 0) {
      return 1;
    } else {
      return a * exponent(a, n - 1);
    }
  };

  console.log(exponent(4, 2)); //16;

  //написать функцию, используя только рекурсию, которая будет выводить сумму всех цифр из массива чисел;
  function sumRecursive(array: number[], index: number = 0): number {
    //базовый случай: если индекс выходит за пределы массива, возвращаем 0 и останавливаем рекурсию;
    if (index >= array.length) {
      return 0;
    }
    //складываем текущий элемент с суммой оставшихся элементов;
    //когда функция вызывается с новым индексом, она добавляет значение текущего элемента к результату вызова для следующего индекса;
    return array[index] + sumRecursive(array, index + 1);
  }

  const arrayN: number[] = [1, 2, 3, 4, 5, 6];
  const resultN: number = sumRecursive(arrayN);
  console.log(resultN); //21;

  //написать функцию, используя только рекурсию, которая будет выводить YES, если число кратное 2м и NO, если не кратное;
  function checkForTwo(n: number): string {
    if (n === 1) {
      return "YES";
    }

    if (n % 2 !== 0) {
      return "NO";
    }

    return checkForTwo(n / 2);
  }

  console.log(checkForTwo(16)); //YES;
  console.log(checkForTwo(15)); //NO;
});
