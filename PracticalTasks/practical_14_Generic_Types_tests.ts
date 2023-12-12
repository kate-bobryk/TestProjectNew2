Feature("Practical Task Number 14 - Generic Types;");

Scenario("PZ14 @C01401 Generic_Types", () => {
  //generic types - обобщенные типы, нужны для описания похожих, но отличающихся какими-то характеристиками типов;
  //синтаксис <T> - переменные, через которые мы можем передавать тип;
  //example 1:
  class Dog {
    type: string = "metis dog";
    age: number = 4;
    sound(): string {
      return "bark!";
    }
  }
  class Retriever extends Dog {
    type: string = "Retriever";
    age: number = 5;
  }

  class Husky extends Dog {
    type: string = "Husky";
    age: number = 2;
  }

  function whatDog<T extends Dog>(dog: T): T {
    console.log(`Meet a ${dog.type} in the forest.`);
    console.log(`He is ${dog.age} years old.`);
    console.log("Dog says -", dog.sound());
    return dog;
  }

  const myRetriever: Retriever = new Retriever();
  whatDog<Retriever>(myRetriever);

  const myHusky: Husky = new Husky();
  whatDog<Husky>(myHusky);

  //example 2:
  function include<T>(array: T[], arg: T): boolean {
    for (const value of array) {
      if (value === arg) {
        return true;
      }
    }
    return false;
  }
  //создаем массив строк:
  const stringArray: string[] = ["apple", "banana", "orange", "grape"];
  //проверяем, содержится ли "orange" в массиве строк:
  const isStringIncluded: boolean = include(stringArray, "orange");
  console.log(`Is 'orange' included in the array? ${isStringIncluded}`);

  //cоздаем массив чисел:
  const numberArray: number[] = [1, 2, 3, 4, 5];
  //проверяем, содержится ли число 3 в массиве чисел:
  const isNumberIncluded: boolean = include(numberArray, 3);
  console.log(`Is 3 included in the array? ${isNumberIncluded}`);
});
