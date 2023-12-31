Feature("Practical Task Number 3 - Arrays");
Scenario("PZ3 @CO31 Arrays", () => {
  let plants: string[] = ["cactus", "pine", "chamomile", "basil", "oak"];
  let animals: Array<string>;
  animals = ["cat", "dog", "bird", "beaver", "cow", "raccoon"];
  console.log(plants);
  console.log(animals);

  //pop() - removes the last element of the array and return that element;
  console.log(`last element of the plants: ${plants.pop()}`);
  console.log(plants);
  console.log(`last element of the animals: ${animals.pop()}`);
  console.log(animals);

  //push() - adds new elements to the array and returns the new array length;
  console.log(`new array length: ${plants.push("lavender")}`);
  console.log(`new array length: ${animals.push("pigeon")}`);
  console.log(`newPlants: ${plants}`); //how to see variable as array type in result?
  console.log(animals);

  //sort() - sorts all the elements of the array;
  console.log(`sorted plants: ${plants.sort()}`);
  console.log(animals.sort());

  //concat() - joins two arrays and returns the combined result (doesn't change original arrays value!!!)
  console.log(animals.concat(["squirrel", "bear"]));
  console.log(animals);
  console.log(plants.concat(animals));
  console.log(plants);

  //indexOf() - returns the index of the first match of a value in the array (-1 if not found);
  console.log(plants.indexOf("lavender"));
  console.log(animals.indexOf("doggo"));

  //copyWithin() - copies a sequence of elements within the array (change arrays value!!!);
  console.log(plants);
  console.log(plants.copyWithin(1, 2, 3));
  console.log(plants);
  console.log(animals);

  //fill() - fills the array with a static value from the provided start index to the end index;
  console.log(plants);
  console.log(plants.fill("leaf", 0, 1));
  console.log(plants.fill("leaf", 5, 6)); //change elements value in particular position, doesn't add elements in array if position doesn't exist.
  console.log(animals.fill("elephant", 0, 1));

  //shift() - removes and returns the first element of the array;
  console.log(plants.shift());
  console.log(animals.shift());
  console.log(plants);

  //splice() - extracts a section of the array and returns the new array;
  console.log(plants);
  console.log(plants.splice(0, 2, "dragon", "fly")); //return newArray which was extracted.
  console.log(plants);
  console.log(animals);
  console.log(animals.splice(1, -1));
  console.log(animals);

  //unshift() - adds one or more elements to the beginning of the array;
  console.log(plants.unshift("semolina", "buckwheat")); //returns length of new array + change arrays value;
  console.log(animals.unshift("tiger"));
  console.log(plants);
  console.log(animals);

  //includes() - checks whether the array contains a certain element;
  console.log(animals.includes("cat"));
  console.log(plants.includes("dragon", 2));

  //join() - joins all elements of the array into a string;
  console.log(plants.join(" + "));
  console.log(animals.join(" , "));
  //split() - vise versa join(), return object;

  plants = ["semolina", "buckwheat", "dragon", "fly", "lavender", "pine"];
  animals = ["tiger", "bird", "cat", "cow", "dog", "pigeon"];

  //lastIndexOf() - returns the last index of an element in the array;
  console.log(animals.lastIndexOf("cat"));
  console.log(animals.lastIndexOf("pigeon", 5));

  //slice() - extracts a section of the array and returns the new array (doesn't change array!!! just extract part of elements without adding new one);
  console.log(plants.slice(1, 3));
  console.log(animals.slice(0, -1));
  console.log(plants);
  console.log(animals);

  //toString() - returns a string representation of the array;
  console.log(plants.toString());

  //toLocaleString() - returns a localized string representing the array;
  console.log(animals.toLocaleString());

  //at() - returns the array item at the given index, accepts negative integers, which count back from the last item.
  console.log(plants.at(0));
  console.log(animals.at(-2));

  //entries() - returns a new array iterator object that contains the key/value pairs for each index in an array.
  const iterator = animals.entries();
  console.log("\nnext() ", iterator.next());
  console.log("\nnext().value ", iterator.next().value);

  //из двух строк с помощью методов search и slice создать подстроку, затем разбить получившуюся строку на слова и вывести количество слов;
  const string1: string = "Today is a good day.";
  const string2: string = "Every day you should smile at once.";
  console.log(string1.search("is"));
  console.log(string2.search("you"));
  const newString: string = string1.slice(0, string1.search("is")) + string2.slice(string2.search("you"));
  console.log(newString);
  console.log(newString.split(" "));
  const newString2: string[] = newString.split(" ");
  console.log(newString2.length);

  //практика с массивами: реализовать метод filter(), вывести результат в консоль:
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

  //практика с массивами: реализовать метод find(), вывести результат в консоль:
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
