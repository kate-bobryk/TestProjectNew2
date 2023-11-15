Feature("Practical Task Number 2 - Strings and Regular expressions");
Scenario("PZ2 @C021 Strings", () => {
  const firstString: string = "In TypeScript, the string is sequence of char values and also considered as an object.";
  const secondString: string = "It is a type of primitive data type that is used to store text data.";
  console.log(firstString.toLowerCase());
  console.log(firstString[0].toLowerCase());
  //console.log(firstString.replace(firstString[0], firstString[0].toLowerCase()));
  console.log(secondString.toUpperCase());
  const result: string = `${firstString}\n${secondString}`;
  console.log(result);
  console.log(result.length);
  console.log("First string included in result? ", result.includes(firstString));
  console.log(result.includes("undefined"));
  console.log(result.startsWith("In TypeScript"));
  console.log(result.endsWith("text data."));
  console.log(result.search(firstString));
  console.log(result.search(secondString));
  console.log(result.search("undefined"));
  console.log(result.search("sequence"));
  console.log(result.search("a type of primitive"));
  console.log(
    "newResult ",
    result.slice(0, result.search("sequence")) + result.slice(result.search("a type of primitive")),
  );
  const subString = `${result.slice(0, -127)} ${result.slice(-52)}`;
  const subString2 = result.slice(0, 25) + result.slice(89);
  console.log(subString);
  console.log(subString2);
  console.log(subString.replace("TypeScript", "JavaScript"));
  const thirdString: string = "    String type of variable.   ";
  console.log(thirdString.length);
  console.log(thirdString.trim());
  console.log(`thirdString: ${thirdString.trim()}`);
  console.log(thirdString.trim().length);
  const fourthString = "string";
  console.log(fourthString[2]);
  console.log(fourthString.charAt(2));
  console.log(fourthString[3]);
  console.log(fourthString[-3]);
  console.log(fourthString.at(-3)); //"i"
  const fifthString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
  const planet = fifthString.split(",");
  console.log(typeof planet); // "object"
  console.log(planet.length);
  console.log(planet[2]);
  console.log(`The third planet in solar system is ${planet[2]}.`);
  console.log(`Some string called '${fifthString} "123"'`);
});

Scenario("PZ2 @C022 Regular expressions", () => {
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

  //matchAll() - returns an iterator containing all the matches, including capturing groups.
  //example 1:
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
  //example 1:
  console.log("replaceAll: ", badString2.replaceAll(regexNew, " "));
  //example 2:
  const exampleName: string = "My friends name is Oleg";
  const newName = exampleName.replaceAll(/Oleg/gi, "Ivan");
  console.log(newName);
});
