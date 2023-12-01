import { User } from "./User";
import { Ownership } from "./Ownership";

//в файле Validator помимо конструктора принимающего разные наборы данных относящихся к свойствам User и Ownership;
//реализовать метод getCredit(без параметров) который будет возвращать true или false в зависимости от того дадут кредит или нет;
//кредит выдают только людям старше 18 лет которые или имеют в собственности квартиру или обладают машиной/кораблем и банковским счетом;

export class Validator implements User, Ownership {
  name: string;
  surname: string;
  age: number;
  hasBankSavingAcc?: boolean;
  hasHome?: boolean;
  hasCar?: boolean;
  hasShip?: boolean;

  constructor(
    userName: string,
    userSurname: string,
    userAge: number,
    userHasBankSavingAcc?: boolean,
    userHasHome?: boolean,
    userHasCar?: boolean,
    userHasShip?: boolean,
  ) {
    this.name = userName;
    this.surname = userSurname;
    this.age = userAge;
    this.hasBankSavingAcc = userHasBankSavingAcc;
    this.hasHome = userHasHome;
    this.hasCar = userHasCar;
    this.hasShip = userHasShip;
  }
  getCredit(): boolean {
    if (this.age > 18 && (this.hasHome || this.hasCar || this.hasShip || this.hasBankSavingAcc)) {
      return true;
    } else {
      return false;
    }
  }
}
