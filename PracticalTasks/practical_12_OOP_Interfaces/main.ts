import { Validator } from "./Validator";
import { Validator2 } from "./Validator2";
// import { User } from "./User";
// import { Ownership } from "./Ownership";

Feature("Practical Task Number 12 - Interfaces;");

Scenario("PZ12 @C01201 Interfaces", () => {
  //реализовать программу которая будет проходиться по всем юзерам и выводить сможет ли человек получить кредит или нет;
  const dataUser1 = { name: "Ivan", surname: "Petrov", age: 25, hasHome: true };
  const dataUser2 = { name: "Petr", surname: "Ivanov", age: 9, hasHome: true, hasBankSavingAcc: true };
  const dataUser3 = { name: "Anna", surname: "Ivanova", age: 45, hasCar: true };
  const dataUser4 = { name: "Olga", surname: "Antonova", age: 31, hasCar: true, hasBankSavingAcc: true };
  const dataUser5 = { name: "Ivan", surname: "Ivanov", age: 58, hasCar: true, hasShip: true };

  for (const dataUser of [dataUser1, dataUser2, dataUser3, dataUser4, dataUser5]) {
    const userValidator = new Validator2(dataUser);
    const result: boolean = userValidator.getCredit();
    console.log(`${dataUser.name} ${dataUser.surname} can get credit: ${result}`);
  }

  const data = [
    { name: "Ivan", surname: "Petrov", age: 25, hasHome: true },
    { name: "Petr", surname: "Ivanov", age: 9, hasHome: true, hasBankSavingAcc: true },
    { name: "Anna", surname: "Ivanova", age: 45, hasCar: true },
    { name: "Olga", surname: "Antonova", age: 31, hasCar: true, hasBankSavingAcc: true },
    { name: "Ivan", surname: "Ivanov", age: 58, hasCar: true, hasShip: true },
  ];

  for (const userData of data) {
    const { name, surname, age, hasHome, hasCar, hasShip, hasBankSavingAcc } = userData;
    const userValidator = new Validator(name, surname, age, hasBankSavingAcc, hasHome, hasCar, hasShip);

    const result: boolean = userValidator.getCredit();
    console.log(`${name} ${surname} can get credit: ${result}`);
  }
});
