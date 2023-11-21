Feature("Practical Task Number 8 - Error Handling");

Scenario("PZ8 @C081 try...catch...finally, throw", () => {
  //задание 1:
  //создать объект user с полями id, name, surname, country, city, phone;
  const user = {
    id: 0,
    name: "Jack",
    surname: "Smith",
    country: "Belarus",
    city: "Minsk",
    phone: "123-456-789",
  };

  //создать функцию printFieldValue которая выводит значение данного поля (если поле name то выводит "Ivan") и длину выводимого значения (в данном случае 4);
  //добавить обработчик ошибок, который в случае, если такого поля нет, выводит соответствующее сообщение в консоль;
  //а так же добавить, чтобы после выполнения функции, вне зависимости от того, верное поле ввели или нет, выводилась запись "getFieldValue func done";
  function printField(user: any, field: string): void {
    console.log(`Field: ${field}`);
    console.log(`Value: ${user[field]}`);
    console.log(`Length: ${user[field].length}`);
    console.log("------");
  }
  function printFieldValue2(user: any, field: string): void {
    try {
      printField(user, field);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      console.log("getFieldValue func done");
    }
  }
  printFieldValue2(user, "id");
  printFieldValue2(user, "lame");
  printFieldValue2(user, "sur5name");
  printFieldValue2(user, " city ");
  printFieldValue2(user, "phone");

  //задание 2:
  //написать функцию проходящую по элементам массива [0, 5, -1] и выводящую "group 1", если число меньше 5 и "group 2" если больше, до тех пор, пока не встретится отрицательное значение;
  //если встретилось отрицательно значение, мы должны прервать выполнение функции выкинув ошибку ("Incorrect value");
  //обернуть все в try catch функцию и если встретится ошибка - обработать ее, чтобы наша программа завершилась успешно, а не упала с ошибкой.
  function checkArray(array: number[]): void {
    try {
      for (const number of array) {
        if (number < 0) {
          throw new Error("Incorrect value");
        } else if (number < 5) {
          console.log("group 1");
        } else {
          console.log("group 2");
        }
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      console.log("Program was finished successfully");
    }
  }
  checkArray([0, 5, -1, 3]);
});
